import * as stylex from '@stylexjs/stylex';
import React from 'react';
import { EntryPointComponent, graphql, usePreloadedQuery } from 'react-relay';
import { BookPageQuery } from './__generated__/BookPageQuery.graphql';

const BookPage: EntryPointComponent<{bookPageQuery: BookPageQuery}, {}> = ({ queries }) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const data = usePreloadedQuery(graphql`
    query BookPageQuery {
      book {
        title
        author {
          name
        }
      }
    }
  `, queries.bookPageQuery);

  return <div>
    <button onClick={() => setIsHighlighted(!isHighlighted)} >Toggle Highlight</button>
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

export default BookPage;