import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { FaTrash } from "react-icons/fa";
import { FaTrashArrowUp } from "react-icons/fa6";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { SelectorContext } from "../../../../store/selector-context.jsx";
import {
  $SelectorCurrentFilters,
  $FilterItem,
  $DeleteButton,
} from "./SelectorCurrentFilters.styles.jsx";

export default function SelectorCurrentFilters() {
  const { clearWhereCriteria, deleteWhereCriteria, whereCriteria } = useContext(SelectorContext);

  function clearWhereCriteriaHandler() {
    clearWhereCriteria();
  }

  function deleteWhereCriteriaHandler(index) {
    deleteWhereCriteria(index);
  }

  return (
    <$SelectorCurrentFilters>
      {whereCriteria.map((criteria, index) => (
        <$FilterItem key={index}>
          {criteria.key} : {criteria.value}
          <a
            data-tooltip-id={"remove"}
            data-tooltip-content={"Remove"}
            data-tooltip-delay-show={1000}
            data-tooltip-place={"top"}
          >
            <$DeleteButton onClick={() => deleteWhereCriteriaHandler(index)}>
              <FaTrashArrowUp />
            </$DeleteButton>
            <Tooltip id={"remove"} />
          </a>
        </$FilterItem>
      ))}
      {whereCriteria.length === 0 ? (
        ""
      ) : (
        <$FilterItem $type={"remove_all"}>
          Clear filters
          <a
            data-tooltip-id={"remove_all"}
            data-tooltip-content={"Remove all"}
            data-tooltip-delay-show={1000}
            data-tooltip-place={"top"}
          >
            <$DeleteButton $type={"remove_all"} onClick={clearWhereCriteria}>
              <FaTrash />
            </$DeleteButton>
            <Tooltip id={"remove_all"} />
          </a>
        </$FilterItem>
      )}
    </$SelectorCurrentFilters>
  );
}
