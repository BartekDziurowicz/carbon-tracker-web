import { forwardRef, useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { $ErrorLabel } from "./RowDetail.styles.jsx";
import DetailView from "./DetailView/DetailView.jsx";
import { CompanyContext } from "../../../../../store/company-context.jsx";
import { apiCallToGetSingleEntity } from "../../../../../api/Api.jsx";
import { colorHandler } from "../Table.utils.js";

const RowDetail = forwardRef(function RowDetail(
  { entityId, entityName, updateRowHandler, deleteRowHandler, rowIndex },
  ref
) {
  const [entity, setEntity] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setParents } = useContext(CompanyContext);

  useEffect(() => {
    async function fetchData() {
      await apiCallToGetSingleEntity(entityId, entityName.toLowerCase())
        .then((resData) => {
          setEntity((_prevEntity) => resData);
          setLoading(_prevValue => false);
        })
        .catch((error) => {
          setError(error);
          setLoading(_prevValue => false);
        });
    }

    if (entityId === 0) {
      setEntity(ref.current);
      setLoading(_prevValue => false);
    } else {
      fetchData();
    }
  }, [entityId, entityName]);

  useEffect(() => {
    if (error === null) {
      let acc = {};
      for (const field in entity) {
        if (typeof entity[field] === "object" && entity[field] !== null) {
          acc[field] = entity[field];
        }
      }
      setParents(acc);
    }
  }, [entity]);

  return (
    <>
      <ClipLoader
        color={colorHandler(entityName)}
        loading={loading}
        size={15}
        speedMultiplier={0.75}
        aria-label="Loading Spinner"
      />
      {!loading && (
        <>
          {error === null ? (
            <DetailView
              entity={entity}
              entityName={entityName}
              updateRowHandler={updateRowHandler}
              deleteRowHandler={deleteRowHandler}
              rowIndex={rowIndex}
            />
          ) : (
            <$ErrorLabel>{error.message}</$ErrorLabel>
          )}
        </>
      )}
    </>
  );
});

export default RowDetail;
