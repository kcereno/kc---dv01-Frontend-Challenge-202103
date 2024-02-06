import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';

import { getData } from '../request/api';
import { LoanDataState } from '../features/loanData/types';
import {
  setError,
  setLoading,
  setLoanData,
} from '../features/loanData/loanDataSlice';

const useFetchData = (
  dispatch: ThunkDispatch<
    {
      loanData: LoanDataState;
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>
) => {
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getData();
        dispatch(setLoanData(data));
      } catch (error) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);
};

export default useFetchData;
