// src/components/Search/SearchModal.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import useSearch from "../../hooks/useSearch";
import getSearchDataset from "../../data/search";
import SearchResult from "./SearchResult";

export default function SearchModal({ type = "public", onClose }) {
  const navigate = useNavigate();
  const dataset = getSearchDataset(type);
  const { query, setQuery, results } = useSearch(dataset);

  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  // Autofocus the input the moment the modal mounts.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Reset selection whenever the result set changes.
  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  const goTo = (destination) => {
    navigate(destination);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }

    if (!results.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const active = results[activeIndex];
      if (active) goTo(active.path);
    }
  };

  return (
    <div
      className="wg-search__overlay"
      onMouseDown={(e) => {
        // Close only when the backdrop itself is clicked.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="wg-search__panel" role="dialog" aria-modal="true">
        <div className="wg-search__input-row">
          <FiSearch className="wg-search__icon" />

          <input
            ref={inputRef}
            type="text"
            className="wg-search__input"
            placeholder={`Search ${type} docs...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />

          <kbd className="wg-search__esc">Esc</kbd>
        </div>

        <div className="wg-search__body">
          {query.trim() === "" && (
            <div className="wg-search__empty">
              Start typing to search {type} documentation.
            </div>
          )}

          {query.trim() !== "" && results.length === 0 && (
            <div className="wg-search__empty">
              No results for &ldquo;{query}&rdquo;.
            </div>
          )}

          {results.length > 0 && (
            <ul className="wg-search__results">
              {results.map((result, index) => (
                <SearchResult
                  key={result.path}
                  result={result}
                  isActive={index === activeIndex}
                  onHover={() => setActiveIndex(index)}
                  onSelect={goTo}
                />
              ))}
            </ul>
          )}
        </div>

        <div className="wg-search__footer">
          <span>
            <kbd>&uarr;</kbd>
            <kbd>&darr;</kbd> to navigate
          </span>
          <span>
            <kbd>Enter</kbd> to select
          </span>
          <span>
            <kbd>Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}