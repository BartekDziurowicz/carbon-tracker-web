import { useContext } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import $Select from "./Select.styles.jsx";

export default function Select({ onChange }) {
  const { selectorFilters, setShowCriteria, setTempWhereCriteria } =
    useContext(SelectorContext);

  return (
    <$Select defaultValue="default" onChange={onChange}>
      <option disabled value="default">
        -- select --
      </option>
      {selectorFilters
        .filter((filter) => filter.enabled)
        .map((filter) => (
          <option key={filter.id}>{filter.name}</option>
        ))}
    </$Select>
  );
}
