import * as stylex from '@stylexjs/stylex';
import SideNavItem from './SideNavItem';
import React, { useEffect } from 'react';
import { colors } from '../colors.stylex';
import { useMatch, useRoutes } from '../Router';
import { graphql, useFragment } from 'react-relay';
import { SideNav_viewer$key } from './__generated__/SideNav_viewer.graphql';
import { SideNavFooter } from './SideNavFooter';
import SignInModal from './SignInModal';
import Flexbox from './layout/Flexbox';
import { layout } from '../layout.stylex';
import SideNavHeader from './SideNavHeader';

type Props = {
  children?: React.ReactNode,
  style?: stylex.StyleXStyles,
  fragmentKey: SideNav_viewer$key
};

const SideNav = ({children, fragmentKey, style}: Props) => {
  const data = useFragment(
    graphql`
      fragment SideNav_viewer on Query {
        viewer {
          id
          ...SideNavFooter_userName
        } 
      }
    `,
    fragmentKey,
  );

  const routes = useRoutes();
  const match = useMatch();

  useEffect(() => {
    document.title = match.title;
  }, [match.title]);

  return <Flexbox style={[layout.fullHeight, style]}>
    <Flexbox style={[styles.base, layout.column, layout.needy]}>
      <SideNavHeader title={match.title}/>
      {routes
        .filter(route => !route.exclude)
        .map((route, i) => <SideNavItem key={i} icon={route.icon} to={route.path!} label={route.label ?? route.title}/>)}
      <Flexbox style={layout.greedy} />
      <SideNavFooter fragmentKey={data.viewer!}/>
    </Flexbox>
    {
      data.viewer !== null
        ? <Flexbox style={[styles.content, layout.fullWidth, layout.column, layout.greedy]}>{children}</Flexbox>
        : <SignInModal isOpen={true} />
    }
  </Flexbox>;
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