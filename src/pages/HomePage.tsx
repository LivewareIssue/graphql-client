import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { graphql, usePreloadedQuery } from 'react-relay';
import { HomePageQuery } from './__generated__/HomePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';

type Props = SimpleEntryPointProps<{
  query: HomePageQuery,
}>;

const HomePage = ({ queries: {query} }: Props) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const data = usePreloadedQuery(graphql`
    query HomePageQuery {
      viewer {
        id
        userName
      }
    }
  `, query);

  return <div>
    <button onClick={() => setIsHighlighted(!isHighlighted)} >Toggle Highlight</button>
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
});

export default HomePage;