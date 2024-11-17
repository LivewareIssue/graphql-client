import { graphql, PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { TasksPageQuery } from './__generated__/TasksPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import { TaskList } from '../components/TaskList';
import { Suspense } from 'react';
import Flexbox from '../components/layout/Flexbox';
import { layout } from '../layout.stylex';
import * as stylex from '@stylexjs/stylex';
import { SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';
import { type TaskComposerQuery as TaskComposerQueryType } from '../components/__generated__/TaskComposerQuery.graphql';
import { default as TaskComposerQuery } from '../components/__generated__/TaskComposerQuery.graphql';
import { SpinnerIcon } from '../components/Icon';
import { colors } from '../colors.stylex';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import TaskComposer from '../components/TaskComposer';

type BaseQueries = {
  tasksPageQuery: TasksPageQuery,
  sideNavQuery: SideNavQuery
};

type ExtraQueries = BaseQueries & {
  taskComposerQuery: TaskComposerQueryType
};

type BasePreloadedQueries = {
  tasksPageQuery: PreloadedQuery<TasksPageQuery>
}

type ExtraPreloadedQueries = BasePreloadedQueries & {
  taskComposerQuery: PreloadedQuery<TaskComposerQueryType>
}

type PreloadedQueries = BasePreloadedQueries | ExtraPreloadedQueries;

type Props = SimpleEntryPointProps<BaseQueries | ExtraQueries>;

const TasksPageContent = (props: PreloadedQueries) => {
  const data = usePreloadedQuery(graphql`
    query TasksPageQuery {
      ...SideNavFooter_fragment
      tasks {
        ...TaskList_fragment
      }
    }
    `, props.tasksPageQuery);

  const [taskComposerQueryRef, loadTaskComposerQuery] = useQueryLoader<TaskComposerQueryType>(
    TaskComposerQuery,
    'taskComposerQuery' in props ? props.taskComposerQuery : null
  );

  // return <Flexbox style={[layout.row, layout.fullHeight]}>
  //   <TaskList loadTaskComposerQuery={loadTaskComposerQuery} fragmentKey={data.tasks} />
  //   {taskComposerQueryRef && <>
  //     <Suspense fallback={<div>Loading..</div>}>
  //       <TaskComposer query={taskComposerQueryRef} />
  //     </Suspense>
  //   </>    
  //   }
  // </Flexbox>;

  return <PanelGroup direction='horizontal'>
    <Panel id='tasks' order={1} minSize={30} defaultSize={50}>
      <TaskList loadTaskComposerQuery={loadTaskComposerQuery} fragmentKey={data.tasks} />
    </Panel>
    {taskComposerQueryRef && <>
      <PanelResizeHandle {...stylex.props(styles.handle)} />
        <Panel id='composer' order={2} minSize={30} defaultSize={50}>
          <Suspense fallback={<div>Loading..</div>}>
            <TaskComposer query={taskComposerQueryRef} />
        </Suspense>
      </Panel>
    </>    
    }
  </PanelGroup>;
}

export const TasksPage = ({ queries: {sideNavQuery, tasksPageQuery, ...queries}, }: Props) => {
  const [taskComposerQueryRef, loadTaskComposerQuery] = useQueryLoader<TaskComposerQueryType>(
    TaskComposerQuery,
    'taskComposerQuery' in queries ? queries.taskComposerQuery : null
  );

  return <Flexbox style={[styles.base, layout.fullHeight, layout.row]}>
    <SideNav query={sideNavQuery} style={layout.sideNav} />
    {/* <div style={{flexGrow: 1, maxWidth: '50%', backgroundColor: 'red', overflow: 'auto'}}>
      <TaskList loadTaskComposerQuery={loadTaskComposerQuery} fragmentKey={data.tasks} />
    </div>
    <div style={{flexGrow: 1, maxWidth: '50%', backgroundColor: 'blue'}}>

    </div> */}
    <Suspense fallback={<Flexbox style={layout.content}><SpinnerIcon size='medium'/>Loading TasksPageContent...</Flexbox>}>
      <TasksPageContent tasksPageQuery={tasksPageQuery} taskComposerQuery={taskComposerQueryRef} {...queries} />
    </Suspense>
  </Flexbox>;
}

const styles = stylex.create({
  base: {
    backgroundColor: colors.background,
  },
  handle: {
    width: '1px',
    backgroundColor: colors.lineColor,
    marginLeft: '10px',
    marginRight: '10px'
  },
});

export default TasksPage;