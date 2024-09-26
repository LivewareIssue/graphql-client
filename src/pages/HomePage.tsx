import { commitLocalUpdate, graphql, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import { HomePageQuery } from './__generated__/HomePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SignInModal from '../components/SignInModal';

type Props = SimpleEntryPointProps<{
  query: HomePageQuery,
}>;

const HomePage = ({ queries: {query} }: Props) => {

  const data = usePreloadedQuery(graphql`
    query HomePageQuery {
      viewer {
        id
        __typename
      }
    }
  `, query);

  const viewer = data.viewer;

  if (viewer == null) {
    return <SignInModal isOpen={true}/>;
  }

  const env = useRelayEnvironment();

  const signOut = () => {
    localStorage.removeItem('token');
    commitLocalUpdate(env, (store) => {
      store.getRoot().setValue(null, 'viewer');
    });
  }

  return <button onClick={signOut}>Sign Out</button>
}

export default HomePage;