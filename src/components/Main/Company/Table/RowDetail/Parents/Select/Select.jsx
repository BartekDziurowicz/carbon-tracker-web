import { useContext, useEffect, useState } from "react";
import { determineUniqueFieldName } from "../../DetailView/DetailView.utils.js";
import {
  apiCallToGetFilterValues,
  apiCallToGetSingleEntity,
} from "../../../../../../../api/Api.jsx";
import { $Option, $Select } from "./Select.styles.jsx";
import { CompanyContext } from "../../../../../../../store/company-context.jsx";

export default function Select({ entityName, parent, parentName, errorHandler }) {
  const [filters, setFilters] = useState([]);
  const [selected, setSelected] = useState(
    parent[determineUniqueFieldName(parentName)]
  );
  const { parents, setParents } = useContext(CompanyContext);

  useEffect(() => {
    setSelected(parents[parentName][determineUniqueFieldName(parentName)]);
  }, [parents]);

  async function getEntityValuesHandler() {
      await apiCallToGetFilterValues(parentName).then((resData) => {
        setFilters((_prevValue) => resData);
      }).catch(error => {
        errorHandler(error);
      });
  }

  async function getNewParent(event) {
    if (selected !== event.target.value) {
      const selectedOption = event.target.options[event.target.selectedIndex];
      const selectedKey = selectedOption.getAttribute("id");

        await apiCallToGetSingleEntity(
          selectedKey,
          parentName
        ).then((resData) => {
          setParents({ ...parents, [parentName]: resData });
        }).catch(error => {
          errorHandler(error);
        });
    }
  }

  return (
    <$Select
      defaultValue="default"
      $color={entityName}
      onMouseDown={() => getEntityValuesHandler()}
      onChange={getNewParent}
    >
      <$Option hidden id={parents[parentName].id} value="default" disabled>
        {selected}
      </$Option>
      {filters.map((filter, index) => (
        <$Option id={filter.id} key={index}>
          {filter.name}
        </$Option>
      ))}
    </$Select>
  );
}
