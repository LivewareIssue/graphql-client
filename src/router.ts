import { loadQuery } from 'react-relay';
import { createBrowserRouter } from 'yarr';
import { RelayEnvironment } from './RelayEnvironment';
import { default as HomePageQuery } from './pages/__generated__/HomePageQuery.graphql';

const routes = [
  {
    component: async () => (await import('./pages/HomePage')).default,
    path: '/',
    preload: () => ({
      query: loadQuery(RelayEnvironment, HomePageQuery, {}),
    }),
  },
  {
    component: async () => (await import('./NotFound')).default,
    path: '*',
  },
];

export const router = createBrowserRouter({
  routes,
  awaitComponent: true,
  awaitPreload: true,
});