export interface LoanDataState {
  data: LoanDataType[];
  filters: FilterType[];
  filteredData: LoanDataType[];
  loading: boolean;
  error: string | null;
}

export enum HomeOwnershipEnum {
  RENT = 'RENT',
  MORTGAGE = 'MORTGAGE',
  OWN = 'OWN',
}

export enum QuarterEnum {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
}

export type LoanDataType = {
  year: number;
  quarter: QuarterEnum;
  grade: string;
  homeOwnership: HomeOwnershipEnum;
  term: TermType;
  currentBalance: string;
};
export type TermType = '36 months' | '60 months';

export type FilterType = {
  year?: number;
  quarter?: QuarterEnum;
  grade?: string;
  homeOwnership?: HomeOwnershipEnum;
  term?: TermType;
};
