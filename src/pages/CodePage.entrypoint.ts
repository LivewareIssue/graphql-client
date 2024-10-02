import { default as CodePageQuery } from './__generated__/CodePageQuery.graphql';
import CodePage from './CodePage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const codePageEntryPoint: SimpleEntryPoint<typeof CodePage> = {
  root: JSResource('CodePage', () => import('./CodePage')),
  getPreloadProps(_params) {
    return {
      queries: {
        query: {
          parameters: CodePageQuery,
          variables: {

          }
        }
      }
    };
  }
}

export default codePageEntryPoint;