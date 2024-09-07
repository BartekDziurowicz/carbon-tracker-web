import { useContext, useEffect, useState } from "react";
import DetailView from "./DetailView/DetailView.jsx";
import { CompanyContext } from "../../../../../store/company-context.jsx";
import { apiCallToGetSingleEntity } from "../../../../../api/Api.jsx";

export default function RowDetail({
  entityId,
  entityName,
  name,
  updateRowHandler,
  rowIndex,
}) {
  const [entity, setEntity] = useState({});
  const { setParents } = useContext(CompanyContext);

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
  }, [entityId, entityName, name]);

  useEffect(() => {
    let acc = {};
    for (const field in entity) {
      if (typeof entity[field] === "object" && entity[field] !== null) {
        acc[field] = entity[field];
      }
    }
    setParents(acc);
  }, [entity])

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
