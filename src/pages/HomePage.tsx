import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { commitLocalUpdate, graphql, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import { HomePageQuery } from './__generated__/HomePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SignInModal from '../components/SignInModal';
import ProfilePicture from '../components/ProfilePicture';

type Props = SimpleEntryPointProps<{
  query: HomePageQuery,
}>;

const HomePage = ({ queries: {query} }: Props) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const data = usePreloadedQuery(graphql`
    query HomePageQuery {
      viewer {
        ...ProfilePicture_viewer
      }
    }
  `, query);

  const viewer = data.viewer;

  if (viewer == null) {
    return <div style={{backgroundColor: '#d9d9d9', height: '100%'}}>
      <SignInModal isOpen={true} />
    </div>;
  }

  return <div>
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.sidebar)}>
        <div style={{margin: '6'}}>
          <ProfilePicture viewer={data.viewer!} />
        </div>
      </div>
      <div {...stylex.props(styles.content)}></div>
    </div>
  </div>;
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    height: '100%'
  },
  sidebar: {
    backgroundColor: 'white',
    width: '200px',
    height: '100%',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px',
    zIndex: 1
  },
  content: {
    backgroundColor: '#FAF9F6',
    flexGrow: 1,
    height: '100%'
  }
});

export default HomePage;