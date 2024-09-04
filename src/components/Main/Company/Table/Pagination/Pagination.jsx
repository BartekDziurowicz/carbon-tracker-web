import { Tooltip } from "react-tooltip";
import { $Pagination, $Icon, $Text } from "./Pagination.styles.jsx";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

export default function Pagination({ color, table }) {
  return (
    <$Pagination>
      <$Icon
        data-tooltip-id={"first_page"}
        data-tooltip-content={"First page"}
        data-tooltip-delay-show={1000}
        data-tooltip-place={"left-start"}
        $color={table.getCanPreviousPage() ? color : ""}
        onClick={
          table.getCanPreviousPage() ? () => table.firstPage() : () => {}
        }
      >
        <FaAnglesLeft />
        <Tooltip id={"first_page"} />
      </$Icon>
      <$Icon
        data-tooltip-id={"previous_page"}
        data-tooltip-content={"Previous page"}
        data-tooltip-delay-show={1000}
        data-tooltip-place={"bottom-end"}
        $color={table.getCanPreviousPage() ? color : ""}
        onClick={
          table.getCanPreviousPage() ? () => table.previousPage() : () => {}
        }
      >
        <FaAngleLeft />
        <Tooltip id={"previous_page"} />
      </$Icon>
      <$Text>
        {table.getState().pagination.pageIndex + 1}/{table.getPageCount()}
      </$Text>
      <$Icon
        data-tooltip-id={"next_page"}
        data-tooltip-content={"Next page"}
        data-tooltip-delay-show={1000}
        data-tooltip-place={"bottom-start"}
        $color={table.getCanNextPage() ? color : ""}
        onClick={table.getCanNextPage() ? () => table.nextPage() : () => {}}
      >
        <FaAngleRight />
        <Tooltip id={"next_page"} />
      </$Icon>
      <$Icon
        data-tooltip-id={"last_page"}
        data-tooltip-content={"Last page"}
        data-tooltip-delay-show={1000}
        data-tooltip-place={"right-start"}
        $color={table.getCanNextPage() ? color : ""}
        onClick={table.getCanNextPage() ? () => table.lastPage() : () => {}}
      >
        <FaAnglesRight />
        <Tooltip id={"last_page"} />
      </$Icon>
    </$Pagination>
  );
}
