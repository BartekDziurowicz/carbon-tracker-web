import { useContext, useEffect, useRef, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  fuzzyFilter,
  getTableColumns,
  determineFieldNameHandler,
} from "./Table.utils.js";
import { CompanyContext } from "../../../../store/company-context.jsx";
import { apiCallToGetListOfEntities, apiCallToGetEntityTemplate } from "../../../../api/Api.jsx";
import { $TableContainer, $TableBox, $Table } from "./Table.styles.jsx";
import Header from "./Header/Header.jsx";
import Search from "./Search/Search.jsx";
import Pagination from "./Pagination/Pagination.jsx";
import RowDetail from "./RowDetail/RowDetail.jsx";

export default function Table() {
  const [header, setHeader] = useState([{ accessorKey: "na", id: "na", header: "na" }]);
  const [rows, setRows] = useState([{}]);
  const { selected } = useContext(CompanyContext);
  const template = useRef({});

  const table = useReactTable({
    data: rows,
    columns: header,
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
    shrinkTableRowsHandler();

    async function fetchData() {
      try {
        await apiCallToGetEntityTemplate(selected.toLowerCase()).then((resData) => {
          const columns = getTableColumns(resData, selected);
          template.current = resData;
          setHeader(_prevValue => columns);
        });
      } catch (error) {
        // TO DO error
      }
    }

    fetchData();
  }, [selected]);

  useEffect(() => {
    async function fetchData() {
      try {
        await apiCallToGetListOfEntities(
          selected.toLowerCase(),
          0,
          "",
          true
        ).then((resData) => {
          setRows((_prevData) => resData);
        });
      } catch (error) {
        //TODO
      }
    }

    fetchData();
  }, [header]);

  const shrinkTableRowsHandler = () => {
    for (const row of table.getRowModel().rows) {
      if (row.getIsExpanded()) {
        row.toggleExpanded();
      };
    }
  }

  const createRowHandler = () => {
    setRows((_prevData) => {
      const data = [template.current, ..._prevData];
      return data;
    });
  };

  const updateRowHandler = (rowIndex, newData) => {
    setRows((_prevData) => {
      const data = _prevData.map((row, index) =>
        index === rowIndex ? newData : row
      );
      return data;
    });
  };

  const deleteRowHandler = (entityId) => {
    for (const row of table.getRowModel().rows) {
      if (Number(row.original.id) === Number(entityId) && row.getIsExpanded()) {
        row.toggleExpanded();
      };
    }
    
    setRows((_prevData) => {
      const data = _prevData.filter(row => Number(row.id) !== Number(entityId));
      return data;
    });
  }

  return (
    <$TableContainer>
      <Search
        color={selected}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        createRowHandler={createRowHandler}
      />
      <$TableBox width="100%">
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
                        name={determineFieldNameHandler(row.original, selected)}
                        updateRowHandler={updateRowHandler}
                        deleteRowHandler={deleteRowHandler}
                        rowIndex={index}
                        ref={template}
                      />
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </$Table>
        <Pagination table={table} color={selected} />
      </$TableBox>
    </$TableContainer>
  );
}
