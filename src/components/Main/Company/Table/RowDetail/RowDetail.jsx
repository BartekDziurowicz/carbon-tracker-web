import { useEffect, useState } from "react";
import { $RowDetail } from "./RowDetail.styles.jsx";
import { apiCallToGetSingleEntity } from "../../../../../api/Api.jsx";

export default function RowDetail({ entityId, entityName }) {
  const [entity, setEntity] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetSingleEntity(
          entityId,
          "name",
          entityName.toLowerCase()
        ).then((resData) => {
          setEntity(_prevEntity => resData);
        });
      } catch (error) {
        //TODO
      }
    }

    fetchData();
  }, [entityId, entityName]);

  return (
    <$RowDetail>
      {JSON.stringify(entity)}
    </$RowDetail>
  );
}
