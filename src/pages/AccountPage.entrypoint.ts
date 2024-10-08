import { default as AccountPageQuery } from './__generated__/AccountPageQuery.graphql';
import { default as SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';
import AccountPage from './AccountPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const accountPageEntryPoint: SimpleEntryPoint<typeof AccountPage> = {
  root: JSResource('AccountPage', () => import('./AccountPage')),
  getPreloadProps(_params) {
    return {
      queries: {
        accountPageQuery: {
          parameters: AccountPageQuery,
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

export default accountPageEntryPoint;