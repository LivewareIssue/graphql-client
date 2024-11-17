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
      '@media (min-aspect-ratio: 5/3)': '15%'
    },
  },
  content: {
    padding: 20,
    gap: 20
  },
  card: {
    padding: 10,
    borderRadius: 5,
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
  }
});