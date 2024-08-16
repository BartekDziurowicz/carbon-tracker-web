export function getTableColumns(object) {
  let columns = [];

  for (const field in object) {
    columns.push({
      accessorKey: field,
      id: field,
      header: field.charAt(0).toUpperCase() + field.slice(1),
    });
  }

  return columns;
}
