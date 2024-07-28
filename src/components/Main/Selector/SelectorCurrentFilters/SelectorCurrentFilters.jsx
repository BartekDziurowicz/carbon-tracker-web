import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { SelectorContext } from "../../../../store/selector-context.jsx";
import { $SelectorCurrentFilters, $FilterItem, $DeleteButton } from "./SelectorCurrentFilters.styles.jsx";

export default function SelectorCurrentFilters() {
  const { whereCriteria } = useContext(SelectorContext);

  return (
    <$SelectorCurrentFilters>
      {whereCriteria.map((criteria, index) => (
        <$FilterItem key={index}>{criteria.key} : {criteria.value}<$DeleteButton><FaTrash /></$DeleteButton></$FilterItem>
      ))}
    </$SelectorCurrentFilters>
  );
}
