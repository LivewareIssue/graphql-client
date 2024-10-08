import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { ComponentsPageQuery } from './__generated__/ComponentsPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import { Suspense } from 'react';
import Flexbox from '../components/layout/Flexbox';
import { layout } from '../layout.stylex';
import * as stylex from '@stylexjs/stylex';
import { SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';

type Props = SimpleEntryPointProps<{
  componentsPageQuery: ComponentsPageQuery,
  sideNavQuery: SideNavQuery
}>;

const ComponentsPageContent = ({ query }: {query: PreloadedQuery<ComponentsPageQuery>}) => {
  const data = usePreloadedQuery(graphql`
    query ComponentsPageQuery {
      viewer {
        id
      }
    }
  `, query);
  
  return <div>ComponentsPage</div>
}

export const ComponentsPage = ({ queries: {componentsPageQuery, sideNavQuery} }: Props) => {
  return <Flexbox style={[layout.fullHeight, layout.row]}>
    <SideNav query={sideNavQuery} style={layout.sideNav} />
    <Flexbox style={[layout.column, layout.content]}>
      <Suspense>
        <ComponentsPageContent query={componentsPageQuery} />
      </Suspense>
    </Flexbox>
  </Flexbox>;
}

const styles = stylex.create({

});

export default ComponentsPage;