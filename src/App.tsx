import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import useFetchData from './hooks/useFetchData';

export default function App() {
  const { data, filteredData, loading, error, filters } = useAppSelector(
    (state) => state.loanData
  );

  const dispatch = useAppDispatch();
  useFetchData(dispatch);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
