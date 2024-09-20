import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { HomePageQuery } from './__generated__/HomePageQuery.graphql';

type HomePageProps = {
  preloaded: {
    query: PreloadedQuery<HomePageQuery>;
  };
};

const HomePage = ({ preloaded }: HomePageProps) => {
  const [isHighlighted, _setIsHighlighted] = React.useState(false);

  const data = usePreloadedQuery<HomePageQuery>(
    graphql`
      query HomePageQuery {
        book {
          author {
            name
          }
        }
      }
    `,
    preloaded.query
  );

  return <div>
    <button onClick={() => _setIsHighlighted(!isHighlighted)} >Toggle Highlight</button>
    <h1 {...stylex.props(styles.base, isHighlighted && styles.highlighted)} >{JSON.stringify(data.book)}</h1>
    
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