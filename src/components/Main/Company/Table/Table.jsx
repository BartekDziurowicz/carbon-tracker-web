import { useContext, useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { fuzzyFilter } from "./Table.utils.jsx";
import { Box, Flex } from "@chakra-ui/react";
import { CompanyContext } from "../../../../store/company-context.jsx";
import { apiCallToGetListOfEntities } from "../../../../api/Api.jsx";
import { getTableColumns, determineFieldNameHandler } from "./Table.utils.jsx";
import { $TableContainer, $TableBox, $Table } from "./Table.styles.jsx";
import Header from "./Header/Header.jsx";
import Search from "./Search/Search.jsx";
import Pagination from "./Pagination/Pagination.jsx";
import RowDetail from "./RowDetail/RowDetail.jsx";

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
    getPaginationRowModel: getPaginationRowModel(),
    getRowCanExpand: () => true,
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
          setTableData((_prevData) => table);
        });
      } catch (error) {
        //TODO
      }
    }

    fetchData();
  }, [selected]);

  const updateRowHandler = (rowIndex, newData) => {
    setTableData((_prevData) => {
      const data = _prevData.data.map((row, index) =>
        index === rowIndex ? newData : row
      );
      return { ..._prevData, data };
    });
  };

  return (
    <$TableContainer>
      <Search
        color={selected}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
      />
      <$TableBox width="100%">
        <Flex height="98%" direction={"column"} gap={2} p={2} grow="1">
          <Box flex="1" overflow="auto">
            <$Table>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <Header header={header} color={selected} />
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row, index) => (
                  <>
                    <tr key={index}>
                      {row.getVisibleCells().map((cell, index) => (
                        <td key={index}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                    {row.getIsExpanded() && (
                      <tr>
                        <td colSpan={row.getVisibleCells().length}>
                          <RowDetail
                            entityId={row.original.id}
                            entityName={selected}
                            name={determineFieldNameHandler(
                              row.original,
                              selected
                            )}
                            updateRowHandler={updateRowHandler}
                            rowIndex={index}
                          />
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </$Table>
          </Box>
          <Pagination table={table} color={selected} />
        </Flex>
      </$TableBox>
    </$TableContainer>
  );
}
