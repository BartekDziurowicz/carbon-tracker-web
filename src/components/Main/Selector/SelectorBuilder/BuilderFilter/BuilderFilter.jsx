import { useContext } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import $BuilderFilter from "./BuilderFilter.styled.jsx";

export default function BuilderItem() {
  const { selectorFilters } = useContext(SelectorContext);

  return (
    <$BuilderFilter>
      <select>
        {selectorFilters.map(filter => <option>{filter.name}</option>)}
      </select>
    </$BuilderFilter>
  );
}
