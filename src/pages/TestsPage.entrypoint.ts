import { default as TestsPageQuery } from './__generated__/TestsPageQuery.graphql';
import TestsPage from './TestsPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const testsPageEntryPoint: SimpleEntryPoint<typeof TestsPage> = {
  root: JSResource('TestsPage', () => import('./TestsPage')),
  getPreloadProps(_params) {
    return {
      queries: {
        query: {
          parameters: TestsPageQuery,
          variables: {

          }
        }
      }
    };
  }
}

export default testsPageEntryPoint;