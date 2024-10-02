import { default as AccountPageQuery } from './__generated__/AccountPageQuery.graphql';
import AccountPage from './AccountPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const accountPageEntryPoint: SimpleEntryPoint<typeof AccountPage> = {
  root: JSResource('AccountPage', () => import('./AccountPage')),
  getPreloadProps(_params) {
    return {
      queries: {
        query: {
          parameters: AccountPageQuery,
          variables: {

          }
        }
      }
    };
  }
}

export default accountPageEntryPoint;