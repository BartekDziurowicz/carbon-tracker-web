import { useState } from "react";
import { determineUniqueFieldName } from "../../DetailView/DetailView.utils.js";
import { apiCallToGetFilterValues } from "../../../../../../../api/Api.jsx";
import { $Select } from "./Select.styles.jsx";

export default function Select({ entityName, parent, parentName }) {
  const [filters, setFilters] = useState([]);
  const entityValue = parent.value && parent.value[determineUniqueFieldName(parent.name)];

  async function getEntityValuesHandler() {
    try {
      await apiCallToGetFilterValues(parentName).then((resData) => {
        setFilters((_prevValue) => resData);
      });
    } catch (error) {
      // TO DO
    }
  }

  return (
    <$Select
      defaultValue="default"
      $color={entityName}
      onMouseDown={() => getEntityValuesHandler()}
      //   onChange={printB}
    >
      <option value="default">
        {entityValue}
      </option>
      {filters
        .filter((filter) => filter.name !== entityValue)
        .map((filter) => (
          <option key={filter.id}>{filter.name}</option>
        ))}
    </$Select>
  );
}
