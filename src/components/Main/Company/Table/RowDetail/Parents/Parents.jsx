import { useContext, useEffect, useState } from "react";
import { PiTreeStructureFill } from "react-icons/pi";
import { $Parents, $Message, $Title } from "./Parents.styles.jsx";
import { $Line } from "../Childs/Childs.styles.jsx";
import Select from "./Select/Select.jsx";
import { CompanyContext } from "../../../../../../store/company-context.jsx";

const ENTITY_HAVE_NO_PARENTS = "The entity does not have a parent.";

export default function Parents({ entityName, entity }) {
  const { parents } = useContext(CompanyContext);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <$Line />
      <$Parents>
        {Object.keys(parents).length === 0 ? (
          <$Message>{ENTITY_HAVE_NO_PARENTS}</$Message>
        ) : (
          Object.keys(parents).map((field) => (
            <>
              <$Title $color={entityName}>
                <PiTreeStructureFill />
                {capitalizeFirstLetter(field)}
              </$Title>
              {field === "memories" ? (
                parents[field] &&
                parents[field].map((memory) => <>{memory.partNumber}</>)
              ) : (
                <Select parent={parents[field]} entityName={entityName} parentName={field}/>
              )}
            </>
          ))
        )}
      </$Parents>
    </>
  );
}
