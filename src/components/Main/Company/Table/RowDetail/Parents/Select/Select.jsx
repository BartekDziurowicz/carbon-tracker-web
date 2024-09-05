import { useState } from "react";
import { apiCallToGetFilterValues } from "../../../../../../../api/Api.jsx";
import { $Select } from "./Select.styles.jsx";

export default function Select({ entityName, parent, parentName }) {
  const [filters, setFilters] = useState([]);
  const entityValue = parent.value && parent.value[determineFieldName(parent.name)];

  async function getEntityValuesHandler() {
    try {
      await apiCallToGetFilterValues(parentName).then((resData) => {
        setFilters((_prevValue) => resData);
      });
    } catch (error) {
      // TO DO
    }
  }

  function determineFieldName(entityName) {
    switch (entityName) {
      case "location":
        return "city";
      case "employee":
        return "corporateKey";
      case "system":
        return "family";
      default:
        return "name";
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
