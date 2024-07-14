import SelectorBuilder from "./SelectorBuilder/SelectorBuilder.jsx";
import { SelectorContext, selectorFilters } from "../../../store/selector-context.jsx";
import $Selector from "./Selector.styles.jsx";

export default function Selector() {

  const ctxSelector = {
    currentSelection: [{ command: "SELECT", filter: "company" }],
    selectionHandler: () => {},
    selectorFilters: selectorFilters
  };

  return (
    <SelectorContext.Provider value={ctxSelector}>
      <$Selector>
        <SelectorBuilder />
      </$Selector>
    </SelectorContext.Provider>
  );
}
