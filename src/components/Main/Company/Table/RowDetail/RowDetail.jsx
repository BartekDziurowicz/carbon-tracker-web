import { forwardRef, useContext, useEffect, useState } from "react";
import DetailView from "./DetailView/DetailView.jsx";
import { CompanyContext } from "../../../../../store/company-context.jsx";
import { apiCallToGetSingleEntity } from "../../../../../api/Api.jsx";

const RowDetail = forwardRef(function RowDetail({
  entityId,
  entityName,
  name,
  updateRowHandler,
  deleteRowHandler,
  rowIndex,
}, ref) {
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

    if (entityId === 0) {
      setEntity(ref.current);
    } else {
      fetchData();
    }
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
      updateRowHandler={updateRowHandler}
      deleteRowHandler={deleteRowHandler}
      rowIndex={rowIndex}
    />
  );
});

export default RowDetail;
