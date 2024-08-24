import { flexRender } from "@tanstack/react-table";
import { $Header, $HeaderBox, $HeaderIcon } from "./Header.styles.jsx";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaSort,
} from "react-icons/fa";

export default function Header({ header }) {
  const isSorted = header.column.getIsSorted();
  return (
    <$Header key={header.id} width={header.getSize()} $colSpan={header.colSpan}>
      {header.isPlaceholder ? null : header.column.id === "expand" ? (
        flexRender(header.column.columnDef.header, header.getContext())
      ) : (
        <$HeaderBox>
          {flexRender(header.column.columnDef.header, header.getContext())}{" "}
          <$HeaderIcon onClick={header.column.getToggleSortingHandler()}>
            {isSorted === "desc" ? (
              <FaArrowAltCircleUp />
            ) : isSorted === "asc" ? (
              <FaArrowAltCircleDown />
            ) : (
              <FaSort />
            )}
          </$HeaderIcon>
        </$HeaderBox>
      )}
    </$Header>
  );
}
