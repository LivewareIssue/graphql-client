import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { commitLocalUpdate, graphql, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import { HomePageQuery } from './__generated__/HomePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SignInModal from '../components/SignInModal';

type Props = SimpleEntryPointProps<{
  query: HomePageQuery,
}>;

const HomePage = ({ queries: {query} }: Props) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const data = usePreloadedQuery(graphql`
    query HomePageQuery {
      viewer {
        id
        __typename
        userName
      }
    }
  `, query);

  var env = useRelayEnvironment();

  const signOut = () => {
    localStorage.removeItem('token');
    commitLocalUpdate(env, (store) => {
      store.getRoot().setValue(null, 'viewer');
    });
  }

  return <div>
    <SignInModal isOpen={data.viewer == null} />
    <button onClick={() => {
      signOut();
    }} >Sign Out</button>
    <h1 {...stylex.props(styles.base, isHighlighted && styles.highlighted)} >{JSON.stringify(data.viewer?.userName)}</h1>
  </div>;
}

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '20px 0',
  },
  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ecf0f1',
  }
});

export default HomePage;