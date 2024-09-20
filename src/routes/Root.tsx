import * as stylex from '@stylexjs/stylex';
import React from 'react';

const Root = () => {
  const [isHighlighted, _setIsHighlighted] = React.useState(false);

  return <div>
    <button onClick={() => _setIsHighlighted(!isHighlighted)} >Toggle Highlight</button>
    <h1 {...stylex.props(styles.base, isHighlighted && styles.highlighted)} >Hello, World!</h1>
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

export default Root;