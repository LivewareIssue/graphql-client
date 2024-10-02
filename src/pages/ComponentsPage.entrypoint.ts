import { default as ComponentsPageQuery } from './__generated__/ComponentsPageQuery.graphql';
import ComponentsPage from './ComponentsPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const componentsPageEntryPoint: SimpleEntryPoint<typeof ComponentsPage> = {
  root: JSResource('ComponentsPage', () => import('./ComponentsPage')),
  getPreloadProps(_params) {
    return {
      queries: {
        query: {
          parameters: ComponentsPageQuery,
          variables: {

          }
        }
      }
    };
  }
}

export default componentsPageEntryPoint;