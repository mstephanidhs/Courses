import { ToastContainer } from 'react-toastify';
import SearchMeal from './components/search-meals';
import FetchTopQuotes from './components/top-quotes';
import Users from './components/users';
import { QueryClient, QueryClientProvider } from 'react-query';
import UpdateQuotes from './components/update-quote';
import QueryCancellationWithAbortSignal from './components/query-cancellation';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <Users/> */}
      {/* <SearchMeal /> */}
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/* <UpdateQuotes />
        <FetchTopQuotes /> */}
        {/* <PaginatedQuotes /> */}
        {/* <InfiniteScrollQuotes /> */}
        <QueryCancellationWithAbortSignal/>
      </QueryClientProvider>
    </>
  );
}

export default App;
