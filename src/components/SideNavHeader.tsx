import * as stylex from '@stylexjs/stylex';
import { layout } from '../layout.stylex';
import { styles as SideNavStyles } from './SideNav';

type Props = {
  title: string,
  style?: stylex.StyleXStyles
};

const SideNavHeader = ({title, style}: Props) => {
  return <div {...stylex.props(SideNavStyles.base, styles.base, layout.unselectable, style)}>{title}</div>;
}

const styles = stylex.create({
  base: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    display: {
      default: 'none',
      '@media (min-aspect-ratio: 5/3)': 'block'
    },
  },
});

export default SideNavHeader;