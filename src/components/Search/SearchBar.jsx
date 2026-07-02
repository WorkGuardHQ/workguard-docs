// src/components/Search/SearchBar.jsx
import { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import "../../styles/search.css";
import { FiSearch } from "react-icons/fi";
export default function SearchBar({ type = "public" }) {
  const [open, setOpen] = useState(false);

  // Global Ctrl+K / Cmd+K shortcut, like Stripe/Notion/Vercel docs.
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isShortcut) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock page scroll while the modal is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);


const shortcut =
  navigator.userAgentData?.platform === "macOS" ||
  /Mac/.test(navigator.userAgent)
    ? "⌘ K"
    : "Ctrl K";

  return (
    <>
      {/* <button
        type="button"
        className="wg-search__trigger"
        onClick={() => setOpen(true)}
      >
       <FiSearch className="wg-search__icon" />
        <span className="wg-search__trigger-label">Search docs...</span>
    

        <kbd className="wg-search__trigger-kbd">
  {shortcut}
</kbd>

      </button> */}
<button
  type="button"
  className="wg-search__trigger"
  onClick={() => setOpen(true)}
  aria-label="Search documentation"
>
    <FiSearch className="wg-search__icon" />

    <span className="wg-search__trigger-label">
        Search docs...
    </span>

    <kbd className="wg-search__trigger-kbd">
        {shortcut}
    </kbd>
</button>

      {open && (
        <SearchModal type={type} onClose={() => setOpen(false)} />
      )}
    </>
  );
}