import { Label } from '@radix-ui/react-label';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../colors.stylex';
import { Link } from '@loop-payments/react-router-relay';
import { useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { layout } from '../layout.stylex';

type Props = {
  to: string,
  label: string,
  icon: Icon
};

const SideNavItem = ({to, label, ...props}: Props) => {
  const { pathname } = useLocation();

  const isActive = pathname === to;

  return <Link {...stylex.props([styles.base, isActive && styles.active])} to={to}>
    {<props.icon />}
    <Label {...stylex.props([styles.label, layout.unselectable])}>{label}</Label>
  </Link>;
}

export const styles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    color: colors.onPrimary,
    display: 'flex',
    fill: colors.onPrimary,
    padding: 10,
    gap: 10,
    ":hover": {
      backgroundColor: colors.primaryShade
    },
  },
  active: {
    backgroundColor: colors.primaryShade,
  },
  label: {
    fontSize: 14,
    display: {
      default: null,
      '@media (max-aspect-ratio: 4/3)': 'none'
    },
  }
});

export default SideNavItem;