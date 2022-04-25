import React, { FC, Fragment } from 'react';
import { Column, Row, useExpanded, useTable } from 'react-table';
import { Base } from '@lib/utils/baseType';

export interface IExpandableRow<T extends object> {
  row: Row<T>;
}

export interface IBaseTableOptions<T extends object> {
  isExpandable?: boolean;
  expandableComponent?: FC<IExpandableRow<T>>;
}

export interface IBaseTable<T extends Base> {
  columns: Readonly<Column<T>[]>;
  data: Readonly<T[]>;
  options?: IBaseTableOptions<T>;
}

const BaseTable = <T extends Base>({
  columns,
  data,
  options,
}: IBaseTable<T>) => {
  const plugins = [];
  if (options?.isExpandable) {
    plugins.push(useExpanded);
  }
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } =
    useTable<T>({ columns, data }, ...plugins);

  return (
    <div className="shadow border-b border-gray-200 sm:rounded-lg">
      <table
        className="min-w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead>
          <tr>
            {headers.map((column) => {
              const headerProps = column.getHeaderProps();
              return (
                <th
                  {...headerProps}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  scope="col"
                  key={headerProps.key}
                >
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <Fragment key={rowProps.key}>
                <tr
                  {...rowProps}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  {row.cells.map((cell) => {
                    const cellProps = cell.getCellProps();
                    return (
                      <td
                        {...cellProps}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        key={cellProps.key}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
                {options?.isExpandable &&
                  options.expandableComponent &&
                  // @ts-expect-error This is due to internals not exporting the right Row that has the prop
                  row.isExpanded &&
                  options.expandableComponent({ row })}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
