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
        $color={table.getCanPreviousPage() ? color : ""}
        onClick={table.getCanPreviousPage() ? () => table.firstPage() : () => {}}
      >
        <FaAnglesLeft />
      </$Icon>
      <$Icon
        $color={table.getCanPreviousPage() ? color : ""}
        onClick={table.getCanPreviousPage() ? () => table.previousPage() : () => {}}
      >
        <FaAngleLeft />
      </$Icon>
      <$Text>{table.getState().pagination.pageIndex + 1}/{table.getPageCount()}</$Text>
      <$Icon
        $color={table.getCanNextPage() ? color : ""}
        onClick={table.getCanNextPage() ? () => table.nextPage() : () => {}}
      >
        <FaAngleRight />
      </$Icon>
      <$Icon
        $color={table.getCanNextPage() ? color : ""}
        onClick={table.getCanNextPage() ? () => table.lastPage() : () => {}}
      >
        <FaAnglesRight />
      </$Icon>
    </$Pagination>
  );
}
