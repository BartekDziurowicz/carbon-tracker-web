import { useEffect, useState } from "react";
import { PiTreeStructureFill } from "react-icons/pi";
import { determineFieldName } from "./Parents.utils.jsx";
import { $Parents, $Message, $Title } from "./Parents.styles.jsx";
import { $Line } from "../Childs/Childs.styles.jsx";

const ENTITY_HAVE_NO_PARENTS = "The entity does not have a parent.";

export default function Parents({ entityName, entity }) {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    let acc = [];
    for (const field in entity) {
      if (typeof entity[field] === "object" && entity[field] !== null) {
        acc = [...acc, { name: field, value: entity[field] }];
      }
    }
    setParents((_prevValue) => acc);
  }, [entity]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <$Line />
      <$Parents>
        {parents.length === 0 ? (
          <$Message>{ENTITY_HAVE_NO_PARENTS}</$Message>
        ) : (
          parents.map((parent) => (
            <>
              <$Title $color={entityName}>
                <PiTreeStructureFill />
                {capitalizeFirstLetter(parent.name)}
              </$Title>
              {parent.name === "memories"
                ? parent.value &&
                  parent.value.map((memory) => <>{memory.partNumber}</>)
                : parent.value && parent.value[determineFieldName(parent.name)]}
            </>
          ))
        )}
      </$Parents>
    </>
  );
}
