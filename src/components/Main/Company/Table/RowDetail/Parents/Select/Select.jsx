import { useContext, useEffect, useState } from "react";
import { determineUniqueFieldName } from "../../DetailView/DetailView.utils.js";
import { apiCallToGetFilterValues, apiCallToGetSingleEntity } from "../../../../../../../api/Api.jsx";
import { $Select } from "./Select.styles.jsx";
import { CompanyContext } from "../../../../../../../store/company-context.jsx";

export default function Select({ entityName, parent, parentName }) {
  const [filters, setFilters] = useState([]);
  const { parents, setParents } = useContext(CompanyContext);

  useEffect(() => {
    setFilters(prev => [...prev, {id: parent.id, name: parent[determineUniqueFieldName(parentName)]}]);
  }, [parents])

  const entityValue = parent[determineUniqueFieldName(parentName)];

  async function getEntityValuesHandler() {
    try {
      await apiCallToGetFilterValues(parentName).then((resData) => {
        setFilters((_prevValue) => resData);
      });
    } catch (error) {
      // TO DO
    }
  }

  async function getNewParent(event) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedKey = selectedOption.getAttribute('id');

    try {
      await apiCallToGetSingleEntity(selectedKey, event.target.value, parentName).then((resData) => {
        setParents({...parents, [parentName]: resData});
      })
    } catch (error) {
      // TO DO
    }
  }

  return (
    <$Select
      defaultValue="default"
      $color={entityName}
      onMouseDown={() => getEntityValuesHandler()}
      onChange={getNewParent}
    >
      <option id={parent.id} value="default">
        {entityValue}
      </option>
      {filters
        // .filter((filter) => filter.name !== entityValue)
        .map((filter, index) => (
          <option id={filter.id} key={index}>{filter.name}</option>
        ))}
    </$Select>
  );
}
