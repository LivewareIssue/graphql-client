import { graphql, usePreloadedQuery } from 'react-relay';
import { TestsPageQuery } from './__generated__/TestsPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';

type Props = SimpleEntryPointProps<{
  query: TestsPageQuery,
}>;

const TestsPage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query TestsPageQuery {
      ...SideNav_viewer
    }
  `, query);

  return <SideNav fragmentKey={data} />;
}

export default TestsPage;