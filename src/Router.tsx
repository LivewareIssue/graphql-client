import { EntryPointContainer, loadEntryPoint, PreloadedEntryPoint } from 'react-relay';
import { createBrowserRouter } from 'yarr';
import { RelayEnvironment } from './RelayEnvironment';

import bookPageEntryPoint from "./pages/BookPage.entrypoint";
import authorPageEntryPoint from './pages/AuthorPage.entrypoint';

const Root = ({ preloaded: { ref } } : { preloaded: {ref: PreloadedEntryPoint<any>} })  => {
  return <EntryPointContainer entryPointReference={ref} props={[]} />;
}

const routes = [
  {
    component: () => Root,
    path: '/book',
    preload: () => ({
      ref: loadEntryPoint({ getEnvironment: () => RelayEnvironment}, bookPageEntryPoint, {}),
    }),
  },
  {
    component: () => Root,
    path: '/author',
    preload: () => ({
      ref: loadEntryPoint({ getEnvironment: () => RelayEnvironment}, authorPageEntryPoint, {}),
    }),
  }
];

const Router = createBrowserRouter({
  routes,
  awaitComponent: true,
  awaitPreload: true,
});

export default Router;