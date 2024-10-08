import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { HomePageQuery } from './__generated__/HomePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import { Suspense } from 'react';
import Flexbox from '../components/layout/Flexbox';
import { layout } from '../layout.stylex';
import * as stylex from '@stylexjs/stylex';
import { SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';

type Props = SimpleEntryPointProps<{
  homePageQuery: HomePageQuery,
  sideNavQuery: SideNavQuery
}>;

const HomePageContent = ({ query }: {query: PreloadedQuery<HomePageQuery>}) => {
  const data = usePreloadedQuery(graphql`
    query HomePageQuery {
      viewer {
        id
      }
    }
    `, query);
  
  return <div>Home</div>
}

export const HomePage = ({ queries: {homePageQuery, sideNavQuery} }: Props) => {
  return <Flexbox style={[layout.fullHeight, layout.row]}>
    <SideNav query={sideNavQuery} style={layout.sideNav} />
    <Flexbox style={[layout.column, layout.content]}>
      <Suspense>
        <HomePageContent query={homePageQuery} />
      </Suspense>
    </Flexbox>
  </Flexbox>;
}

const styles = stylex.create({

});

export default HomePage;