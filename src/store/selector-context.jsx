import { createContext } from "react";

export const SelectorContext = createContext({
  currentSelection: [],
  selectionHandler: () => {},
  selectorFilters: []
});
