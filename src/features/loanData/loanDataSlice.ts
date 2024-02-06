import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterType, LoanDataState, LoanDataType } from './types';

const initialState: LoanDataState = {
  data: [],
  filters: [],
  filteredData: [],
  loading: false,
  error: null,
};

export const loanDataSlice = createSlice({
  name: 'loanData',
  initialState,
  // As per official Redux docs, Redux Toolkit uses Immer thus allowing "mutating" state in reducers
  // https://redux.js.org/tutorials/quick-start
  reducers: {
    setLoanData: (state, action: PayloadAction<LoanDataType[]>) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterType[]>) => {
      state.filters = action.payload;

      const filteredData = state.data.filter((item) =>
        state.filters.every((filterItem) => {
          const [filterKey, filterValue] = Object.entries(filterItem)[0];
          return item[filterKey as keyof LoanDataType] === filterValue;
        })
      );

      state.filteredData = filteredData;
    },
  },
});

export const { setLoanData, setLoading, setError, setFilters } =
  loanDataSlice.actions;

export default loanDataSlice.reducer;
