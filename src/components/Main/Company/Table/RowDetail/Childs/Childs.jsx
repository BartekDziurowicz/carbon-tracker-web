import { useEffect, useState } from "react";
import { apiCallToGetEntityChilds } from "../../../../../../api/Api.jsx";
import { $Childs, $Child, $Title, $Line, $Message } from "./Childs.styles.jsx";

function messageHandler(childName) { return "The entity does not have " + childName + " childs related."};

export default function Childs({ entityName, children, objId, objName, call, childEntities }) {
  const [childs, setChilds] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetEntityChilds(
          entityName.toLowerCase(),
          objId,
          objName,
          childEntities,
          call
        ).then((resData) => {
          setChilds((_prevData) => resData);
        });
      } catch (error) {
        setChilds((_prevData) => [error.message]);
      }
    }
    fetchData();
  }, [entityName, objId, objName, call]);

  return (
    <>
      <$Line />
      <$Childs>
        <$Title $color={entityName}>{children}</$Title>
        {childs.length === 0 ? <$Message>{messageHandler(childEntities[call])}</$Message> : childs.map((child, index) => (
          <$Child key={index}>{child}</$Child>
        ))}
      </$Childs>
    </>
  );
}
