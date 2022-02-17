import React from 'react';
import { Column, useTable } from 'react-table';
import { Base } from '@lib/utils/baseType';

export interface IBaseTable<T extends Base> {
  columns: Readonly<Column<any>[]>;
  data: Readonly<T[]>;
}

const BaseTable = <T extends Base>({ columns, data }: IBaseTable<T>) => {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } =
    useTable<T>({ columns, data });

  return (
    <div className="shadow border-b border-gray-200 sm:rounded-lg">
      <table
        className="min-w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead>
          <tr>
            {headers.map((column, i) => (
              <th
                {...column.getHeaderProps()}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                scope="col"
                key={i}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                key={i}
              >
                {row.cells.map((cell, j) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    key={j}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
