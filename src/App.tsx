import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';
import Router from './Router';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Router />
    </RelayEnvironmentProvider>
  );
}

export default App;