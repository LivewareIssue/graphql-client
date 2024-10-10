import * as stylex from '@stylexjs/stylex';
import { colors } from '../colors.stylex';
import { SpinnerIcon } from './Icon';

export type Props = {
  disabled?: boolean,
  loading?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: React.ReactNode,
  style?: stylex.StyleXStyles,
}

const Button = ({children, loading, style, ...props}: Props) =>
  <button {...stylex.props([styles.button, style])} {...props}>{children}{loading &&<SpinnerIcon size='small'/>}</button>;

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
    gap: '8px',
    userSelect: 'none',
    fontWeight: 700,
    ":hover": {
      backgroundColor: colors.accentShade
    }
  }
});

export default Button;