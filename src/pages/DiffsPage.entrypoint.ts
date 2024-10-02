import { default as DiffsPageQuery } from './__generated__/DiffsPageQuery.graphql';
import DiffsPage from './DiffsPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const diffsPageEntryPoint: SimpleEntryPoint<typeof DiffsPage> = {
   root: JSResource('DiffsPage', () => import('./DiffsPage')),
   getPreloadProps(_params) {
      return {
         queries: {
            query: {
               parameters: DiffsPageQuery,
               variables: {

               }
            }
         }
      };
   }
}

export default diffsPageEntryPoint;