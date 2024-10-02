import * as stylex from '@stylexjs/stylex';

export const layout = stylex.create({
  fullHeight: {
    height: '100vh'
  },
  fullWidth: {
    width: '100vw'
  },
  column: {
    flexDirection: 'column'
  },
  greedy: {
    flexGrow: 1
  },
  needy: {
    flexGrow: 0
  },
  unselectable: {
    userSelect: 'none'
  },
});