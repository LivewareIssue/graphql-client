import { default as HomePageQuery } from './__generated__/HomePageQuery.graphql';
import { default as SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';
import HomePage from './HomePage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const homePageEntryPoint: SimpleEntryPoint<typeof HomePage> = {
  root: JSResource('HomePage', () => import('./HomePage')),
  getPreloadProps(_params) {
    return {
      queries: {
        homePageQuery: {
          parameters: HomePageQuery,
          variables: {

          }
        },
        sideNavQuery: {
          parameters: SideNavQuery,
          variables: {

          }
        }
      },
      options: {
        fetchPolicy: 'store-or-network'
      }
    };
  }
}

export default homePageEntryPoint;