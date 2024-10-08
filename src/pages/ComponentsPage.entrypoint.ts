import { default as ComponentsPageQuery } from './__generated__/ComponentsPageQuery.graphql';
import { default as SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';
import ComponentsPage from './ComponentsPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const componentsPageEntryPoint: SimpleEntryPoint<typeof ComponentsPage> = {
  root: JSResource('ComponentsPage', () => import('./ComponentsPage')),
  getPreloadProps(_params) {
    return {
      queries: {
        componentsPageQuery: {
          parameters: ComponentsPageQuery,
          variables: {

          }
        },
        sideNavQuery: {
          parameters: SideNavQuery,
          variables: {
            
          }
        }
      }
    };
  }
}

export default componentsPageEntryPoint;