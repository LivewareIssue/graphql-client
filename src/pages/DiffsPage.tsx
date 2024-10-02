import { graphql, usePreloadedQuery } from 'react-relay';
import { DiffsPageQuery } from './__generated__/DiffsPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';

type Props = SimpleEntryPointProps<{
  query: DiffsPageQuery,
}>;

const DiffsPage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query DiffsPageQuery {
      ...SideNav_viewer
    }
  `, query);

  return <SideNav fragmentKey={data} />;
}

export default DiffsPage;