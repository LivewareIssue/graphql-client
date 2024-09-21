
import { EntryPoint } from 'react-relay';
import { default as AuthorPageQuery } from './__generated__/AuthorPageQuery.graphql';
import AuthorPage from './AuthorPage';
import JSResource from '../JSResourceReference';

const authorPageEntryPoint: EntryPoint<typeof AuthorPage> = {
   root: JSResource('AuthorPage', () => import('./AuthorPage').then(module => module.default)),
   getPreloadProps(_params) {
      return {
         extraProps: {},
         entryPoints: {},
         queries: {
            authorPageQuery: {
               parameters: AuthorPageQuery,
               variables: {}
            }
         }
      };
   }
}

export default authorPageEntryPoint;