import { graphql, usePreloadedQuery } from 'react-relay';
import { NodePageQuery } from './__generated__/NodePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import { User } from '../components/node/User';
import Flexbox from '../components/layout/Flexbox';
import { layout } from '../layout.stylex';
import { Suspense } from 'react';
import SignInModal from '../components/SignInModal';

type Props = SimpleEntryPointProps<{
  query: NodePageQuery,
}>;

const NodePage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query NodePageQuery($id: ID!) {
      ...SideNavFooter_fragment
      node(id: $id) {
        id
        __typename
        ...User_fragment
      }
    }
  `, query);

  return <Flexbox style={[layout.fullHeight, layout.row]}>
    {/* {<SignInModal isOpen={data.viewer == null}/> */}
    <Suspense fallback={<div>Loading side-nav...</div>}>
      <SideNav fragmentKey={data} />
    </Suspense>
    <Suspense fallback={<div>Loading node...</div>}>
      {data.node?.__typename === 'User' && <User fragmentKey={data.node} />}
    </Suspense>
  </Flexbox>
}

export default NodePage;