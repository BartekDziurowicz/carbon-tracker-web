import { useContext, useEffect, useState } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import { $BuilderValues } from "./BuilderValues.styles.jsx";
import { apiCallToGetFilterValues } from "../../../../../api/Api.jsx";

export default function BuilderValues() {
  const [filterValues, setFilterValues] = useState([]);
  const { tempWhereCriteria, setTempWhereCriteria } =
    useContext(SelectorContext);

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetFilterValues(tempWhereCriteria.key).then(
          (resData) => {
            setFilterValues((_prevFilterValues) => resData);
          }
        );
      } catch (error) {
        //TODO
      }
    }
    fetchData();
  }, [tempWhereCriteria.key]);

  function handleWhereCriteriaChange(event) {
    setTempWhereCriteria({ ...tempWhereCriteria, value: [event.target.value] });
  }

  return (
    <$BuilderValues>
      <select onChange={handleWhereCriteriaChange}>
        <option disabled selected>
          -- select --
        </option>
        {filterValues.map((filterValue) => (
          <option key={filterValue.id}>{filterValue.name}</option>
        ))}
      </select>
    </$BuilderValues>
  );
}
