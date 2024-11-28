import { useContext, useState, useRef } from "react";
import { PiTreeStructureFill } from "react-icons/pi";
import { $Parents, $ParentWrapper, $Message, $Title, $ErrorLabel } from "./Parents.styles.jsx";
import { $Line } from "../Childs/Childs.styles.jsx";
import Select from "./Select/Select.jsx";
import { CompanyContext } from "../../../../../../store/company-context.jsx";

const ENTITY_HAVE_NO_PARENTS = "The entity does not have a parent.";

export default function Parents({ entityName }) {
  const [error, setError] = useState(null);
  const { parents } = useContext(CompanyContext);
  const timer = useRef();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function errorHandler(error) {
    setError(error.message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setError(null);
    }, 3000);
  }

  return (
    <>
      <$Line />
      {error === null ? (
        <$Parents>
          {Object.keys(parents).length === 0 ? (
            <$Message>{ENTITY_HAVE_NO_PARENTS}</$Message>
          ) : (
            Object.keys(parents).map((field) => (
              <$ParentWrapper>
                <$Title $color={entityName}>
                  <PiTreeStructureFill />
                  {capitalizeFirstLetter(field)}
                </$Title>
                {field === "memories" ? (
                  parents[field] &&
                  parents[field].map((memory) => <>{memory.partNumber}</>)
                ) : (
                  <Select
                    parent={parents[field]}
                    entityName={entityName}
                    parentName={field}
                    errorHandler={errorHandler}
                  />
                )}
              </$ParentWrapper>
            ))
          )}
        </$Parents>
      ) : (
        <$ErrorLabel>{error}</$ErrorLabel>
      )}
    </>
  );
}
