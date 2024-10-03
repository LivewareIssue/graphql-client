import * as stylex from '@stylexjs/stylex';
import { colors } from '../colors.stylex';
import { SpinnerIcon } from './Icon';

type Props = {
  disabled?: boolean,
  loading?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: React.ReactNode,
}

const Button = ({children, loading, ...props}: Props) =>
  <button {...stylex.props(styles.button)} {...props}>{children}{loading &&<SpinnerIcon size='small'/>}</button>;

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
    fontWeight: 700,
    ":hover": {
      backgroundColor: colors.accentShade
    }
  }
});

export default Button;