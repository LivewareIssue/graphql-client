import { default as AuthorPageQuery } from './__generated__/AuthorPageQuery.graphql';
import AuthorPage from './AuthorPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const authorPageEntryPoint: SimpleEntryPoint<typeof AuthorPage> = {
   root: JSResource('AuthorPage', () => import('./AuthorPage')),
   getPreloadProps(_params) {
      return {
         queries: {
            query: {
               parameters: AuthorPageQuery,
               variables: {

               }
            }
         }
      };
   }
}

export default authorPageEntryPoint;