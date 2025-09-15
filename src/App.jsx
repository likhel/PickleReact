import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyRoutes from './MyRoutes';
import { BrowserRouter } from 'react-router-dom';
function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
