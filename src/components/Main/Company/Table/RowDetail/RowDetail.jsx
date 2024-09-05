import { useEffect, useState } from "react";
import DetailView from "./DetailView/DetailView.jsx";
import { apiCallToGetSingleEntity } from "../../../../../api/Api.jsx";

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
    <DetailView
      entity={entity}
      entityName={entityName}
      fieldName={name}
      updateRowHandler={updateRowHandler}
      rowIndex={rowIndex}
    />
  );
}
