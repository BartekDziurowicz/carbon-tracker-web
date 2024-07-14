import { createContext } from "react";

export const selectorFilters = [
  { name: "area" },
  { name: "company" },
  { name: "country" },
  { name: "employee" },
  { name: "location" },
  { name: "manufacturer (CPU)" },
  { name: "manufacturer (RAM)" },
  { name: "office" },
  { name: "producer" },
  { name: "system" },
  { name: "team" },
  { name: "tribe" },  
  { name: "workstation" },
  { name: "vendor" },
];

export const SelectorContext = createContext({
  currentSelection: [],
  selectionHandler: () => {},
  selectorFilters: []
});
