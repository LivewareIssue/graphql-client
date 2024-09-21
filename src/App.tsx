import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';
import { Suspense } from 'react';
import { RouteRenderer, RouterProvider } from 'yarr';
import Router from './Router';
import { ErrorBoundary } from 'react-error-boundary';

const PendingIndicator = () => <div>Pending...</div>;

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RouterProvider router={Router}>
        <ErrorBoundary
          FallbackComponent={() => <div>Something went wrong</div>}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <RouteRenderer pendingIndicator={<PendingIndicator />} />
          </Suspense>
        </ErrorBoundary>
      </RouterProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;