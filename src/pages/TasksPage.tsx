import { graphql, usePreloadedQuery } from 'react-relay';
import { TasksPageQuery } from './__generated__/TasksPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';

type Props = SimpleEntryPointProps<{
  query: TasksPageQuery,
}>;

const TasksPage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query TasksPageQuery {
      ...SideNav_viewer
    }
  `, query);

  return <SideNav fragmentKey={data} />;
}

export default TasksPage;