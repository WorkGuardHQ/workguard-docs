// src/data/search/index.js
import publicSearch from "./publicSearch";
import employeeSearch from "./employeeSearch";
import adminSearch from "./adminSearch";

const datasets = {
  public: publicSearch,
  employee: employeeSearch,
  admin: adminSearch,
};

// Falls back to public so the search bar never crashes if `type` is
// missing or unrecognized.
export default function getSearchDataset(type) {
  return datasets[type] || datasets.public;
}