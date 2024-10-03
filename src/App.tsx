import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';
import Router from './Router';
import { Suspense } from 'react';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense>
        <Router />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;