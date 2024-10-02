import * as stylex from '@stylexjs/stylex';
import { colors } from '../colors.stylex';

type Props = {
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: React.ReactNode,
}

const Button = ({children, ...props}: Props) =>
  <button {...stylex.props(styles.button)} {...props}>{children}</button>;

export const styles = stylex.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    padding: '12px 12px',
    fontSize: '14px',
    lineHeight: 1,
    backgroundColor: colors.accent,
    color: 'white',
    fontWeight: 700,
    ":hover": {
      backgroundColor: colors.accentShade
    }
  }
});

export default Button;