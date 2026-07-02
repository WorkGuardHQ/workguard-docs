// src/utils/search.js
import Fuse from "fuse.js";

/**
 * Builds a Fuse.js index for a documentation dataset.
 * Every entry in `dataset` looks like:
 * {
 *   title: "Payroll",
 *   path: "/admin/payroll",
 *   description: "Run payroll, approve payroll, overtime, deductions, bonuses.",
 *   sections: ["Net Salary", "Deductions", ...]
 * }
 */
export function createSearchIndex(dataset) {
  return new Fuse(dataset, {
    keys: [
      { name: "title", weight: 0.55 },
      { name: "sections", weight: 0.30 },
      { name: "description", weight: 0.15 },
    ],
    threshold: 0.35,
    distance: 100,
    ignoreLocation: true,
    includeMatches: true,
    includeScore: true,
    minMatchCharLength: 2,
  });
}

// Turns "Monthly Overtime Cap" into "monthly-overtime-cap" so a matched
// section can optionally link straight to that heading (#monthly-overtime-cap)
// once the pages expose matching ids on their <h2>/<h3> tags.
export function slugify(text = "") {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}