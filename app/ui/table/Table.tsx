"use client";
import React from "react";
import {
  useReactTable,
  flexRender,
  TableOptions,
  Row,
  getCoreRowModel,
} from "@tanstack/react-table";

type TableProps<T extends Record<string, unknown>> = Omit<
  TableOptions<T>,
  "getCoreRowModel"
>;

export const Table = <T extends Record<string, unknown>>({
  data,
  columns,
}: TableProps<T>): JSX.Element => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-lg border border-gray-200">
      <table className="max-h-full min-w-full max-w-full table-fixed divide-y divide-gray-200 text-center">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="px-6 py-3 text-left text-sm font-bold text-gray-600"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      className="whitespace-nowrap text-md font-light text-gray-800 py-4 px-2"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
