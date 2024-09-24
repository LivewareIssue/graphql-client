import { default as HomePageQuery } from './__generated__/HomePageQuery.graphql';
import HomePage from './HomePage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const homePageEntryPoint: SimpleEntryPoint<typeof HomePage> = {
   root: JSResource('HomePage', () => import('./HomePage')),
   getPreloadProps(_params) {
      return {
         queries: {
            query: {
               parameters: HomePageQuery,
               variables: {

               }
            }
         }
      };
   }
}

export default homePageEntryPoint;