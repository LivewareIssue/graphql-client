import * as stylex from '@stylexjs/stylex';

export const layout = stylex.create({
  fullHeight: {
    height: '100%'
  },
  fullWidth: {
    width: '100%'
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
    minWidth: {
      default: null,
      '@media (min-aspect-ratio: 5/3)': '200px'
    },
  },
  content: {
    padding: 20,
    gap: 20
  },
});