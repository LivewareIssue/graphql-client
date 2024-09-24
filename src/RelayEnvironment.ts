import {
  Environment,
  RequestParameters,
  Network,
  Variables,
  RecordSource,
  Store,
  Observable
} from 'relay-runtime';
import { ClientOptions, createClient } from 'graphql-http';

const options: ClientOptions = {
  url: 'http://localhost:5294/graphql',
};

var token = localStorage.getItem('token');

if (token) {
  options.headers = {
    Authorization: `Bearer ${token}`,
  };
}

const client = createClient(options);

function fetch(operation: RequestParameters, variables: Variables) {
  var token = localStorage.getItem('token');

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