import { forwardRef, useEffect, useState } from "react";
import { $Parents } from "./Parents.styles.jsx";
import { $Line } from "../Childs/Childs.styles.jsx";

const ENTITY_HAVE_NO_PARENTS = "The entity does not have a parent.";

const Parents = forwardRef(({}, ref) => {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    for (const field in ref.current) {
      if (typeof ref.current[field] === 'object' && ref.current[field] !== null) {
        setParents(_prevValue => [..._prevValue, {name: field, parent: ref.current[field]}]);
      }
    }
  }, []);

  return (
    <>
      <$Line />
      <$Parents>{parents.length === 0 ? ENTITY_HAVE_NO_PARENTS : parents.map(parent => <>{parent}</>)}</$Parents>
    </>
  );
});

export default Parents;
