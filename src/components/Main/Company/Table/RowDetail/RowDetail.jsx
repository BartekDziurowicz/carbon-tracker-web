import { useEffect, useState } from "react";
import Country from "./DetailView/Country.jsx";
import { apiCallToGetSingleEntity } from "../../../../../api/Api.jsx";

function rowDetailViewHandler(entityName, entity, updateRowHandler, rowIndex) {
  switch (entityName) {
    case "Country":
      return (
        <Country
          entity={entity}
          entityName={entityName}
          updateRowHandler={updateRowHandler}
          rowIndex={rowIndex}
        />
      );
    default:
      return <>Error</>;
  }
}

export default function RowDetail({
  entityId,
  entityName,
  name,
  updateRowHandler,
  rowIndex,
}) {
  const [entity, setEntity] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetSingleEntity(
          entityId,
          name,
          entityName.toLowerCase()
        ).then((resData) => {
          setEntity((_prevEntity) => resData);
        });
      } catch (error) {
        //TODO
      }
    }

    fetchData();
  }, [entityId, entityName]);

  return (
    rowDetailViewHandler(entityName, entity, updateRowHandler, rowIndex)
  );
}
