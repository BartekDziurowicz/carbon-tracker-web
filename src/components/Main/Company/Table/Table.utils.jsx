import { $IconCell, $IconHeader } from "./Table.styles.jsx";
import { FaPlusSquare } from "react-icons/fa";

export function getTableColumns(object) {
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
    header: () => <$IconHeader><FaPlusSquare /></$IconHeader>,
    cell: () => <$IconCell><FaPlusSquare /></$IconCell>,
  })

  return columns;
}
