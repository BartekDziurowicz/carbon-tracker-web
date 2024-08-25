import { rankItem } from "@tanstack/match-sorter-utils";
import { $IconCell, $IconHeader } from "./Table.styles.jsx";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import {
  appblue,
  appblack,
  appgreen,
  appgreylight,
} from "../../../../utils/colors.styles.jsx";

export function getTableColumns(object, selected) {
  let columns = [];

  for (const field in object) {
    if (object[field] !== null) {
      columns.push({
        accessorKey: field,
        id: field,
        header: field.charAt(0).toUpperCase() + field.slice(1),
      });
    }
  }

  columns.push({
    id: "expand",
    header: () => (
      <$IconHeader>
        <FaPlusSquare />
      </$IconHeader>
    ),
    cell: ({ row }) =>
      row.getCanExpand() ? (
        <$IconCell $color={selected} onClick={row.getToggleExpandedHandler()}>
          {row.getIsExpanded() ? <FaMinusSquare /> : <FaPlusSquare />}
        </$IconCell>
      ) : null,
  });

  return columns;
}

export const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
};

export function colorHandler(submenu) {
  switch (submenu) {
    case "Country":
    case "Location":
    case "Office":
    case "Area":
    case "Company":
    case "Tribe":
    case "Team":
    case "Employee":
    case "Role":
      return appgreen;
    case "Threshold":
    case "Filter":
      return appblack;
    case "Workstation":
    case "Producer":
    case "System":
    case "Vendor":
    case "Processor":
    case "Memory":
    case "Manufacturer":
      return appblue;
    default:
      return appgreylight;
  }
}
