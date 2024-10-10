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
import { SpinnerIcon } from '../components/Icon';
import { colors } from '../colors.stylex';

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

  return <TaskEditor fragmentKey={data.tasks} />
}

export const TasksPage = ({ queries: {tasksPageQuery, sideNavQuery} }: Props) => {
  return <Flexbox style={[styles.base, layout.fullHeight, layout.row]}>
    <SideNav query={sideNavQuery} style={layout.sideNav} />
    <Flexbox style={[layout.column, layout.fullWidth, layout.content]}>
      <Suspense fallback={<Flexbox style={layout.content}><SpinnerIcon size='medium'/>Loading TasksPageContent...</Flexbox>}>
        <TasksPageContent query={tasksPageQuery} />
      </Suspense>
    </Flexbox>
  </Flexbox>;
}

const styles = stylex.create({
  base: {
    backgroundColor: colors.background,
    overflow: 'hidden',
  }
});

export default TasksPage;