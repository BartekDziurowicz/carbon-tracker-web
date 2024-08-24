import { useContext, useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { fuzzyFilter } from "./Table.utils.jsx";
import { Box, Flex, Input } from "@chakra-ui/react";
import { CompanyContext } from "../../../../store/company-context.jsx";
import { apiCallToGetListOfEntities } from "../../../../api/Api.jsx";
import { getTableColumns } from "./Table.utils.jsx";
import { $TableContainer, $TableBox, $Table } from "./Table.styles.jsx";
import Header from "./Header/Header.jsx";
import Search from "./Search/Search.jsx";

export default function Table() {
  const [tableData, setTableData] = useState({
    data: [{}],
    columns: [{ accessorKey: "na", id: "na", header: "na" }],
  });
  const { selected } = useContext(CompanyContext);

  const table = useReactTable({
    data: tableData.data,
    columns: tableData.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetListOfEntities(
          selected.toLowerCase(),
          0,
          "",
          true
        ).then((resData) => {
          const columns = getTableColumns(resData[0], selected);
          const table = { data: resData, columns: columns };
          setTableData((_prevInventory) => table);
        });
      } catch (error) {
        //TODO
      }
    }

    fetchData();
  }, [selected]);

  return (
    <$TableContainer>
      <Search color={selected} onChange={(e) => table.setGlobalFilter(e.target.value)} />
      <$TableBox width="100%">
        <Flex height="98%" direction={"column"} gap={2} p={2} grow="1">
          <Box flex="1" overflow="auto">
            <$Table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <Header header={header} color={selected}/>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr>
                    {row.getVisibleCells().map((cell) => (
                      <td>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <tr>
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
          </Box>
        </Flex>
      </$TableBox>
    </$TableContainer>
  );
}
