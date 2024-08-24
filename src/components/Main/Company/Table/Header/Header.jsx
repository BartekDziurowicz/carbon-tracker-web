import { flexRender } from "@tanstack/react-table";
import { Tooltip } from "react-tooltip";
import { $Header, $HeaderBox, $HeaderIcon } from "./Header.styles.jsx";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaSort,
} from "react-icons/fa";

export default function Header({ color, header }) {
  const isSorted = header.column.getIsSorted();
  return (
    <$Header key={header.id} width={header.getSize()} $colSpan={header.colSpan} $color={color}>
      {header.isPlaceholder ? null : header.column.id === "expand" ? (
        flexRender(header.column.columnDef.header, header.getContext())
      ) : (
        <$HeaderBox>
          {flexRender(header.column.columnDef.header, header.getContext())}{" "}
          <$HeaderIcon
            onClick={header.column.getToggleSortingHandler()}
            data-tooltip-id={"header_item_tooltip" + header.column.id}
            data-tooltip-content={isSorted === "desc" ? "descending" : isSorted === "asc" ? "ascending" : "none"}
            data-tooltip-delay-show={1000}
            data-tooltip-place={"top"}
          >
            {isSorted === "desc" ? (
              <FaArrowAltCircleUp />
            ) : isSorted === "asc" ? (
              <FaArrowAltCircleDown />
            ) : (
              <FaSort />
            )}
            <Tooltip id={"header_item_tooltip" + header.column.id} />
          </$HeaderIcon>
        </$HeaderBox>
      )}
    </$Header>
  );
}
