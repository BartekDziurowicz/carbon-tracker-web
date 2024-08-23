import { useContext, useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Box, Flex } from "@chakra-ui/react";
import { CompanyContext } from "../../../../store/company-context.jsx";
import { apiCallToGetListOfEntities } from "../../../../api/Api.jsx";
import { getTableColumns } from "./Table.utils.jsx";
import {
  $TableContainer,
  $TableBox,
  $Table,
} from "./Table.styles.jsx";
import Header from "./Header/Header.jsx";

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
  });

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetListOfEntities(selected.toLowerCase(), 0, "", true).then((resData) => {
          const columns = getTableColumns(resData[0]);
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
      <$TableBox width="100%">
        <Flex height="98%" direction={"column"} gap={2} p={2} grow="1">
          <Flex alignItems={"center"}>search</Flex>
          <Box flex="1" overflow="auto">
            <$Table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <Header header={header} />
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
