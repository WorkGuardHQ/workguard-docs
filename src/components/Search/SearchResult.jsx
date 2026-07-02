// src/components/Search/SearchResult.jsx
import { slugify } from "../../utils/search";

export default function SearchResult({
  result,
  isActive,
  onSelect,
  onHover,
}) {
  return (
    <li
      className={
        "wg-search__result" + (isActive ? " is-active" : "")
      }
      onMouseEnter={onHover}
    >
      <button
        type="button"
        className="wg-search__result-main"
        onClick={() => onSelect(result.path)}
      >
        <span className="wg-search__result-title">{result.title}</span>
        <span className="wg-search__result-desc">{result.description}</span>
      </button>

      {result.matchedSections?.length > 0 && (
        <ul className="wg-search__result-sections">
          {result.matchedSections.map((section) => (
            <li key={section}>
              <button
                type="button"
                className="wg-search__section-link"
                onClick={() =>
                  onSelect(`${result.path}#${slugify(section)}`)
                }
              >
                <span className="wg-search__arrow">&rarr;</span>
                {section}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}