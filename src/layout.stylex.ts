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
  row: {
    flexDirection: 'row'
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
  sideNav: {
    width: {
      default: null,
      '@media (min-aspect-ratio: 4/3)': '200px'
    },
  },
  content: {
    padding: 20,
  }
});