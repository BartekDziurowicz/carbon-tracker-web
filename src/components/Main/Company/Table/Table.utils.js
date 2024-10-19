import { rankItem } from "@tanstack/match-sorter-utils";
import { $IconCell, $IconHeader, $LabelHeader } from "./Table.styles.jsx";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import {
  appblue,
  appblack,
  appgreen,
  appgreylight,
  appred,
} from "../../../../utils/colors.styles.jsx";

export function getTableColumns(object, selected) {
  let columns = [];

  for (const field in object) {
    if (typeof object[field] !== "object" || object[field] === null) {
      columns.push({
        accessorKey: field,
        id: field,
        header: () => (
          <$LabelHeader>
            {field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")}
          </$LabelHeader>
        ),
        cell: ({ renderValue }) => {
          if (renderValue() === true || renderValue() === 'true') {
            return <input type="checkbox" defaultChecked disabled/>;
          }
          if (renderValue() === false || renderValue() === 'false') {
            return <label><input type="checkbox" defaultChecked={false} disabled /></label>;
          }          
          return <label>{renderValue()}</label>;
        }          
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

export function colorHandler(selected) {
  switch (selected) {
    case "Country":
    case "Location":
    case "Office":
    case "Area":
    case "Company":
    case "Tribe":
    case "Team":
    case "Employee":
    case "Role":
    case "ok":
      return appgreen;
    case "Threshold":
    case "Filter":
    case "Indicator":
      return appblack;
    case "Workstation":
    case "Producer":
    case "System":
    case "Vendor":
    case "Processor":
    case "Memory":
    case "Manufacturer":
      return appblue;
    case "delete":
    case "error":
      return appred;
    default:
      return appgreylight;
  }
}

export function determinateRestrictedEntitiesHandler(entityName) {
  const notRelatedEntities = ["Filter", "Threshold", "Indicator"];

  return !notRelatedEntities.includes(entityName);
}
