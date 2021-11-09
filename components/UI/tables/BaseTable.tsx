import React from 'react';
import { useTable } from 'react-table';

export enum TableColor {
  LIGHT,
  DARK,
}

export interface IBaseTable {
  color?: TableColor;
  title: string;
  columns: any;
  data: any;
}

const BaseTable = ({
  color = TableColor.LIGHT,
  title,
  columns,
  data,
}: IBaseTable): JSX.Element => {
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div
      className={
        'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
        (color === TableColor.LIGHT ? 'bg-white' : 'bg-blueGray-700 text-white')
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            {title && (
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === TableColor.LIGHT
                    ? 'text-blueGray-700'
                    : 'text-white')
                }
              >
                {title}
              </h3>
            )}
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table
          className="items-center w-full bg-transparent border-collapse"
          {...getTableProps()}
        >
          <thead>
            <tr>
              {headers.map((column, i) => (
                <th
                  key={i}
                  {...column.getHeaderProps()}
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === TableColor.LIGHT
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                  }
                >
                  {column.render('Header')}
                </th>
              ))}
              <th
                className={
                  'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                  (color === TableColor.LIGHT
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                }
              ></th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row, i) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()} key={i}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell, j) => {
                        // Apply the cell props
                        return (
                          <td
                            {...cell.getCellProps()}
                            key={j}
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            {
                              // Render the cell contents
                              cell.render('Cell')
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BaseTable;
