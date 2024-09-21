import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { EntryPointComponent, graphql, usePreloadedQuery } from 'react-relay';
import { AuthorPageQuery } from './__generated__/AuthorPageQuery.graphql';

const AuthorPage: EntryPointComponent<{authorPageQuery: AuthorPageQuery}, {}> = ({ queries }) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const data = usePreloadedQuery(graphql`
    query AuthorPageQuery {
        author {
          name
        }
    }
  `, queries.authorPageQuery);

  return <div>
    <button onClick={() => setIsHighlighted(!isHighlighted)} >Toggle Highlight</button>
    <h1 {...stylex.props(styles.base, isHighlighted && styles.highlighted)} >{JSON.stringify(data.author)}</h1>
    
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

export default AuthorPage;