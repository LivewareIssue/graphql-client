import { graphql, usePreloadedQuery } from 'react-relay';
import { CodePageQuery } from './__generated__/CodePageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';

type Props = SimpleEntryPointProps<{
  query: CodePageQuery,
}>;

const CodePage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query CodePageQuery {
      ...SideNav_viewer
    }
  `, query);

  return <SideNav fragmentKey={data} />;
}

export default CodePage;