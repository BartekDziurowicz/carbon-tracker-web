import { useContext, useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReportsContext } from "../../../../../../../store/reports-context.jsx";
import { getTableColumns } from "./Table.utils.js";
import { $Table } from "./Table.styles.jsx";

export default function Table({ indicatorData, section }) {
  const [header, setHeader] = useState([
    { accessorKey: "na", id: "na", header: "na" },
  ]);
  const [rows, setRows] = useState([{}]);

  const { currentIndicator } = useContext(ReportsContext);

  useEffect(() => {
    const columns = getTableColumns(section, currentIndicator);
    setHeader((_prevHeader) => columns);
  }, [indicatorData, section]);

  useEffect(() => {
    const summary = indicatorData.reduce((acc, curr) => {
      const group = acc[curr.group_name] || { car_sum_t: 0, car_avg_th: 0, usa_avg_th: 0, car_avg_um: 0, count: 0 };
      
      group.car_sum_t += curr.car_sum_t;
      group.car_avg_th += curr.car_avg_th;
      group.usa_avg_th += curr.usa_avg_th;
      group.car_avg_um += curr.car_avg_um;
      group.count += 1;
      
      acc[curr.group_name] = group;
      return acc;
    }, {});

    const calculatedSummary = Object.keys(summary).map(group_name => {
      const group = summary[group_name];
      return {
        group_name,
        car_sum_t: group.car_sum_t.toFixed(9),
        car_avg_th: (group.car_avg_th / group.count).toFixed(9),
        usa_avg_th: (group.usa_avg_th / group.count).toFixed(2),
        car_avg_um: group.car_avg_um.toFixed(9)
      };
    });

    setRows(calculatedSummary);
  }, [header]);

  const table = useReactTable({
    data: rows,
    columns: header,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
      <$Table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr key={index}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={index}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <td>
                  {footer.isPlaceholder
                    ? null
                    : flexRender(
                        footer.column.columnDef.footer,
                        footer.getContext()
                      )}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </$Table>
  );
}
