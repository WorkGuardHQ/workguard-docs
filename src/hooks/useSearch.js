// src/hooks/useSearch.js
import { useCallback, useMemo, useState } from "react";
import { createSearchIndex } from "../utils/search";

const MAX_RESULTS = 8;
const MAX_SECTIONS_PER_RESULT = 3;

/**
 * useSearch(dataset)
 *
 * dataset: array of { title, path, description, sections[] }
 * returns: { query, setQuery, results, clear }
 *
 * `results` is the dataset items ranked by Fuse, each one enriched with
 * `matchedSections`: the specific sections (H2/H3-equivalent) that matched
 * the query, so the UI can show "Payroll -> Monthly Overtime Cap" instead
 * of just the page title.
 */
export default function useSearch(dataset) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () => createSearchIndex(dataset),
    [dataset]
  );

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];

    const raw = fuse.search(trimmed, { limit: MAX_RESULTS });

    return raw.map(({ item, matches = [] }) => {
      const sectionHits = matches
        .filter((match) => match.key === "sections")
        .map((match) => item.sections[match.arrayIndex])
        .filter(Boolean);

      const matchedSections = sectionHits.length
        ? Array.from(new Set(sectionHits)).slice(0, MAX_SECTIONS_PER_RESULT)
        : item.sections.slice(0, MAX_SECTIONS_PER_RESULT);

        
      return { ...item, matchedSections };
    });
  }, [fuse, query]);

  const clear = useCallback(() => setQuery(""), []);

  return { query, setQuery, results, clear };
}