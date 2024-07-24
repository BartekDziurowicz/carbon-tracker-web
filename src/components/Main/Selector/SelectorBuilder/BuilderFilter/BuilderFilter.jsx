import { useContext } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import $BuilderFilter from "./BuilderFilter.styled.jsx";

export default function BuilderItem() {
  const { selectorFilters } = useContext(SelectorContext);

  return (
    <$BuilderFilter>
      <select>
        {selectorFilters
          .filter((filter) => filter.enabled)
          .map((filter) => (
            <option key={filter.id}>{filter.name}</option>
          ))}
      </select>
    </$BuilderFilter>
  );
}
