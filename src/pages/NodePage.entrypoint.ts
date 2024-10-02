import { default as NodePageQuery } from './__generated__/NodePageQuery.graphql';
import NodePage from './NodePage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

type Params = {
  id: string
};

const nodePageEntryPoint: SimpleEntryPoint<typeof NodePage, Params> = {
  root: JSResource('NodePage', () => import('./NodePage')),
  getPreloadProps(params) {
    console.log(params);
    return {
      queries: {
        query: {
          parameters: NodePageQuery,
          variables: {
            id: params.params['id']!
          },
        }
      }
    };
  }
}

export default nodePageEntryPoint;