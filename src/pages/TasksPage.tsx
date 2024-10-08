import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { TasksPageQuery } from './__generated__/TasksPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import { TaskEditor } from '../components/TaskEditor';
import { Suspense } from 'react';
import Flexbox from '../components/layout/Flexbox';
import { layout } from '../layout.stylex';
import * as stylex from '@stylexjs/stylex';
import { SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';

type Props = SimpleEntryPointProps<{
  tasksPageQuery: TasksPageQuery,
  sideNavQuery: SideNavQuery
}>;

const TasksPageContent = ({ query }: {query: PreloadedQuery<TasksPageQuery>}) => {
  const data = usePreloadedQuery(graphql`
    query TasksPageQuery {
      ...SideNavFooter_fragment
      tasks {
        ...TaskEditor_fragment
      }
    }
    `, query);
  
  const task = data.tasks?.find(Boolean);

  return task && <TaskEditor fragmentKey={task} />
}

export const TasksPage = ({ queries: {tasksPageQuery, sideNavQuery} }: Props) => {
  return <Flexbox style={[layout.fullHeight, layout.row]}>
    <SideNav query={sideNavQuery} style={layout.sideNav} />
    <Flexbox style={[layout.column, layout.content]}>
      <Suspense>
        <TasksPageContent query={tasksPageQuery} />
      </Suspense>
    </Flexbox>
  </Flexbox>;
}

const styles = stylex.create({

});

export default TasksPage;