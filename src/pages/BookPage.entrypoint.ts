
import { EntryPoint } from 'react-relay';
import { default as BookPageQuery } from './__generated__/BookPageQuery.graphql';
import BookPage from './BookPage';
import JSResource from '../JSResourceReference';

const bookPageEntryPoint: EntryPoint<typeof BookPage> = {
   root: JSResource('BookPage', () => import('./BookPage').then(module => module.default)),
   getPreloadProps(_params) {
      return {
         extraProps: {},
         entryPoints: {},
         queries: {
            bookPageQuery: {
               parameters: BookPageQuery,
               variables: {}
            }
         }
      };
   }
}

export default bookPageEntryPoint;