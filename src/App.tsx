import GradeBarChart from './components/GradeBarChart/GradeBarChart';
import GradeTable from './components/GradeTable/GradeTable';
import GradeTableFilter from './components/GradeTableFilter/GradeTableFilter';
import { setFilters } from './features/loanData/loanDataSlice';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import useFetchData from './hooks/useFetchData';

export default function App() {
  const { data, filteredData, loading, error, filters } = useAppSelector(
    (state) => state.loanData
  );

  const dispatch = useAppDispatch();
  useFetchData(dispatch);

  return (
    <main className="flex flex-col items-center min-h-screen pt-20 text-white bg-gray-900">
      <div className="mb-10 text-center ">
        <h1 className="text-3xl font-bold tracking-tight">Loan Analysis</h1>
        <p>By Karl Cereno</p>
      </div>
      {/* Error */}
      {error && (
        <p className="py-10 text-2xl font-bold tracking-tight text-center">
          There has been an error
        </p>
      )}

      {/* Loading */}
      {loading && (
        <p className="py-10 text-2xl font-bold tracking-tight text-center">
          Loading Data
        </p>
      )}

      <div className="space-y-6">
        {filteredData.length <= 0 ? (
          <p className="py-10 text-2xl font-bold tracking-tight text-center">
            No data found. Please adjust your filters.
          </p>
        ) : (
          <>
            <GradeBarChart chartData={filteredData} />
            <GradeTable loanData={filteredData} />
          </>
        )}
        <GradeTableFilter
          filters={filters}
          updateFilters={(updatedFilters) => {
            dispatch(setFilters(updatedFilters));
          }}
          loanData={data}
        />
      </div>
    </main>
  );
}
