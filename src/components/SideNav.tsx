import * as stylex from '@stylexjs/stylex';
import SideNavItem from './SideNavItem';
import { Suspense, useEffect } from 'react';
import { colors } from '../colors.stylex';
import { useMatch, useRoutes } from '../Router';
import Flexbox from './layout/Flexbox';
import { layout } from '../layout.stylex';
import SideNavHeader from './SideNavHeader';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { SideNavQuery } from './__generated__/SideNavQuery.graphql';
import { SideNavFooter } from './SideNavFooter';
import { SpinnerIcon, UserCircleIcon } from './Icon';
import SignInModal from './SignInModal';

type Props = {
  query: PreloadedQuery<SideNavQuery>,
  style?: stylex.StyleXStyles,
  children?: React.ReactNode,
};

export const sideNavQuery = graphql`
  query SideNavQuery {
    ...SignInModal_fragment
    ...SideNavFooter_fragment
  }`;


const SideNav = ({query, style}: Props) => {
  const data = usePreloadedQuery(sideNavQuery, query);

  const routes = useRoutes();
  const match = useMatch();

  useEffect(() => {
    document.title = match.title;
  }, [match.title]);

  return <Flexbox style={[styles.base, layout.column, layout.needy, style]}>
      <Suspense fallback={null}>
        <SignInModal fragmentKey={data} />
      </Suspense>
      <SideNavHeader title={match.title}/>
      {routes
        .filter(route => !route.exclude)
        .map((route, i) => <SideNavItem key={i} icon={route.icon} to={route.path!} label={route.label ?? route.title}/>)}
      <Flexbox style={layout.greedy} />
      <Suspense fallback={<SideNavItem icon={UserCircleIcon} to='/account'><SpinnerIcon size='small' /></SideNavItem>}>
        <SideNavFooter fragmentKey={data} />
      </Suspense>
    </Flexbox>
}

export const styles = stylex.create({
  base: {
    backgroundColor: colors.primary,
    color: colors.onPrimary,
    display: 'flex',
    fill: colors.onPrimary,
  },
  content: {
    alignItems: 'flex-start',
    backgroundColor: colors.background,
    color: colors.primaryText,
    fill: colors.primaryText,
    padding: 20,
    gap: 20,
  }
});

export default SideNav;