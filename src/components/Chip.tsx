import * as stylex from '@stylexjs/stylex';
import { colors } from '../colors.stylex';

type Props = {
  children?: React.ReactNode,
  style?: stylex.StaticStyles,
}

const Chip = ({children, style, ...props}: Props) =>
  <div {...stylex.props(styles.button, style)} {...props}>{children}</div>;

export const styles = stylex.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: 1,
    backgroundColor: colors.accent,
    color: 'white',
    gap: '8px',
    userSelect: 'none',
    fontWeight: 700,
  }
});

export default Chip;