import React from 'react';
import { LoanDataType } from '../features/loanData/types';
import { TableDataType, TableRowType } from './ui/Table/types';
import { convertToDollarString, extractUniqueValues } from '../utils';
import Table from './ui/Table';

type GradeTableProps = {
  loanData: LoanDataType[];
};

function GradeTable({ loanData }: GradeTableProps) {
  const row: TableRowType = {};
  const rows: TableRowType[] = [row];

  // Used to determine columns names
  const uniqueGrades = extractUniqueValues(loanData, 'grade');

  const columns = uniqueGrades.map((grade) => ({
    name: `Grade ${grade}`,
    accessor: `grade ${grade}`,
  }));

  // Aggregate the total balance for each grade
  uniqueGrades.forEach((grade) => {
    const key = `grade ${grade}`;

    // Filter the loan data by grade and sum the current balance
    const totalBalance = loanData
      .filter((data) => data.grade === grade)
      .reduce(
        (accumulator, currentValue) =>
          accumulator + +currentValue.currentBalance,
        0
      );

    const dollarValue = convertToDollarString(
      Math.round(totalBalance * 100) / 100
    );

    row[key] = dollarValue;
  });

  const tableData: TableDataType = {
    columns,
    rows,
  };
  return <Table tableData={tableData} />;
}

export default GradeTable;
