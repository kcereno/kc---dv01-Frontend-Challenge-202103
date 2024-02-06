export type TableDataType = {
  columns: TableColumnType[];
  rows: TableRowType[];
};

export type TableColumnType = {
  name: string;
  accessor: string;
};

export type TableRowType = {
  [key: string]: string | number;
};
