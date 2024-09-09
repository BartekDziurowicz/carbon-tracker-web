import { useContext } from "react";
import { CompanyContext } from "../../../../store/company-context.jsx";
import { iconHandler } from "./title.utils.js";
import { $Title, $Icon } from "./Title.styles.jsx";



export default function () {
  const { selected } = useContext(CompanyContext);
  return (
    <$Title $color={selected}>
      <$Icon>{iconHandler(selected)}</$Icon>
      {selected}
    </$Title>
  );
}
