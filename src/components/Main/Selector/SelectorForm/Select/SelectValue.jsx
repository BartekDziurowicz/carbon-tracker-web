import { useContext, useEffect, useState } from "react";
import { SelectorContext } from "../../../../../store/selector-context.jsx";
import $Select from "./Select.styles.jsx";
import { apiCallToGetFilterValues } from "../../../../../api/Api.jsx";

export default function SelectValue({ errorHandler }) {
  const [filterValues, setFilterValues] = useState([]);
  const [firstOption, setFirstOption] = useState("");
  const { tempWhereCriteria, setTempWhereCriteria } =
    useContext(SelectorContext);

  useEffect(() => {
    async function fetchData() {
      await apiCallToGetFilterValues(tempWhereCriteria.key)
        .then((resData) => {
          setFilterValues((_prevFilterValues) => resData);
          setTempWhereCriteria({
            ...tempWhereCriteria,
            value: resData ? resData[0].name : null,
            id: resData ? resData[0].id : null,
          });
          setFirstOption(resData ? resData[0].name : "");
        })
        .catch((error) => {
          console.error(error);
          errorHandler(error)});
    }
    tempWhereCriteria.key && fetchData();
  }, [tempWhereCriteria.key]);

  function handleWhereCriteriaChange(event) {
    setFirstOption(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedKey = selectedOption.getAttribute("id");
    setTempWhereCriteria({
      ...tempWhereCriteria,
      value: event.target.value,
      id: selectedKey,
    });
  }

  return (
    <$Select
      onChange={handleWhereCriteriaChange}
      value={firstOption}
      disabled={filterValues.length === 0}
    >
      {filterValues.map((filterValue, index) => (
        <option id={filterValue.id} key={index}>
          {filterValue.name}
        </option>
      ))}
    </$Select>
  );
}
