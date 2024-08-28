import { useEffect, useState } from "react";
import { $RowDetail } from "./RowDetail.styles.jsx";
import Country from "./DetailView/Country.jsx";
import { apiCallToGetSingleEntity } from "../../../../../api/Api.jsx";

function rowDetailViewHandler(entityName, entity) {
  switch (entityName) {
    case "Country": return <Country entity={entity} entityName={entityName}/>;
    default: return <>Error</>;
  }
}

export default function RowDetail({ entityId, entityName, name }) {
  const [entity, setEntity] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetSingleEntity(
          entityId,
          name,
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
      {rowDetailViewHandler(entityName, entity)}
    </$RowDetail>
  );
}
