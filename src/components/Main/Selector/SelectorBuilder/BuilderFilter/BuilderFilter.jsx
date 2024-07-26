import { useContext } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import $BuilderFilter from "./BuilderFilter.styles.jsx";

export default function BuilderItem({ criteria }) {
  const { selectorFilters, setShowCriteria, setTempWhereCriteria } = useContext(SelectorContext);

  function handleShowCriteriaChange(event) {
    setShowCriteria(event.target.value);
  }

  function handleWhereCriteriaChange(event) {
    setTempWhereCriteria({key: event.target.value, value: null});
  }

  return (
    <$BuilderFilter>
      <select onChange={criteria === "show" ? handleShowCriteriaChange : handleWhereCriteriaChange} defaultValue="default">
        <option disabled value="default">-- select --</option>
        {selectorFilters
          .filter((filter) => filter.enabled)
          .map((filter) => (
            <option key={filter.id}>{filter.name}</option>
          ))}
      </select>
    </$BuilderFilter>
  );
}
