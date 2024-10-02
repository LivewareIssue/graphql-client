import { graphql, usePreloadedQuery } from 'react-relay';
import { HomePageQuery } from './__generated__/HomePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';

type Props = SimpleEntryPointProps<{
  query: HomePageQuery,
}>;

const HomePage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query HomePageQuery {
      ...SideNav_viewer
    }
  `, query);

  return <SideNav fragmentKey={data} />;
}

export default HomePage;