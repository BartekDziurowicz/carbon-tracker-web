import { useEffect, useState } from "react";
import { determinateChildsHandler } from "./Childs.utils.jsx";
import { apiCallToGetEntityChilds } from "../../../../../../api/Api.jsx";
import { $Childs, $Child, $Title, $Line } from "./Childs.styles.jsx";

export default function Childs({ entityName, children, objId, objName }) {
  const [childs, setChilds] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetEntityChilds(
          entityName.toLowerCase(),
          objId,
          objName
        ).then((resData) => {
          setChilds((_prevData) => resData);
        });
      } catch (error) {
        setChilds((_prevData) => [error.message]);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {determinateChildsHandler(entityName.toLowerCase()).map(
        (childName, index) => (
          <div key={index}>
            <$Line />
            <$Childs>
              <$Title $color={entityName}>
                {children}
                {childName}
              </$Title>
              {childs.map((child, index) => (
                <$Child key={index}>{child}</$Child>
              ))}
            </$Childs>
          </div>
        )
      )}
    </>
  );
}
