import { graphql, usePreloadedQuery } from 'react-relay';
import { NodePageQuery } from './__generated__/NodePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import { User } from '../components/node/User';
import { SpinnerIcon } from '../components/Icon';

type Props = SimpleEntryPointProps<{
  query: NodePageQuery,
}>;

const NodePage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query NodePageQuery($id: ID!) {
      ...SideNav_viewer
      node(id: $id) {
        id
        __typename
        ...User_fragment
      }
    }
  `, query);

  return <SideNav fragmentKey={data}>
    {data.node?.__typename === 'User' && <User fragmentKey={data.node} />}
  </SideNav>;
}

export default NodePage;