import { useLoaderData } from "react-router-dom";
import SelectorBuilder from "./SelectorBuilder/SelectorBuilder.jsx";
import { SelectorContext } from "../../../store/selector-context.jsx";
import $Selector from "./Selector.styles.jsx";

export default function Selector() {
  const selectorFilters = useLoaderData();

  const ctxSelector = {
    currentSelection: [{ command: "show", filter: "area" }, { command: "by", filter: "area"}],
    selectionHandler: () => {},
    selectorFilters: selectorFilters
  };

  return (
    <SelectorContext.Provider value={ctxSelector}>
      <$Selector>
        <SelectorBuilder />
      </$Selector>
      charts elements
    </SelectorContext.Provider>
  );
}

export async function filtersLoader() {
  const response = await fetch('http://localhost:8080/filter/filters');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to get selector filters.");
  }

  return resData;
}
