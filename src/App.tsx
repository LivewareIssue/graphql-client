import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';
import Router from './Router';
import { Suspense } from 'react';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<div>Top level loading...</div>}>
        <Router />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;