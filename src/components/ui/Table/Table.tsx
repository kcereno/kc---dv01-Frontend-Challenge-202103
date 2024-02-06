import React from 'react';
import { TableDataType } from './types';

type TablePropsType = {
  tableData: TableDataType;
};

function Table({ tableData }: TablePropsType) {
  return (
    <div className="relative overflow-x-auto border rounded-md border-slate-600">
      <table className="w-full text-sm text-center text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableData.columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3"
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {tableData.columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.rows.length === 0 && (
        <div className="py-10 text-2xl text-center text-bold">
          No Table Data Found
        </div>
      )}
    </div>
  );
}

export default Table;
