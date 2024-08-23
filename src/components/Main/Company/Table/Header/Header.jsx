import { flexRender } from "@tanstack/react-table";
import { $Header } from "./Header.styles.jsx";

export default function Header({ header }) {
  return (
    <$Header
        key={header.id}
        style={{ width: header.getSize() }}
        colSpan={header.colSpan}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}      
    </$Header>
  );
}
