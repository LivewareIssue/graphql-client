import {
  Environment,
  RequestParameters,
  Network,
  Variables,
  RecordSource,
  Store,
  Observable
} from 'relay-runtime';
import { createClient } from 'graphql-http';

const client = createClient({
  url: 'http://localhost:5294/graphql',
  headers: async () => {
    const token = localStorage.getItem('token');
    if (token != null) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }

    return null;
  },
});

function fetch(operation: RequestParameters, variables: Variables) {
  return Observable.create((sink) => {
    if (!operation.text) {
      return sink.error(new Error('Operation text cannot be empty'));
    }
    return client.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      sink,
    );
  });
}

export const network = Network.create(fetch);

export const RelayEnvironment = new Environment({
  network: Network.create(fetch),
  store: new Store(new RecordSource()),
});