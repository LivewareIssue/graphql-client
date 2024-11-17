import * as stylex from '@stylexjs/stylex';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { TaskComposerQuery } from './__generated__/TaskComposerQuery.graphql';
import Flexbox from './layout/Flexbox';
import { layout } from '../layout.stylex';
import TaskSizeChip from './TaskSizeChip';
import TaskPriorityChip from './TaskPriorityChip';
import TaskStatusChip from './TaskStatusChip';
import { formatDistance } from 'date-fns';

type Props = {
  query: PreloadedQuery<TaskComposerQuery>,
  style?: stylex.StyleXStyles
};

const TaskComposer = ({query, style}: Props) => {
  const {task} = usePreloadedQuery(graphql`
    query TaskComposerQuery($id: ID!) {
      task(id: $id) @required(action: THROW) {
        content
        createdAt
        id
        owner {
          userName
        }
        priority
        size
        status
        title
        updatedAt
      }
    }
  `, query);

  return <Flexbox style={[styles.panel, layout.column, style]}>
    <div {...stylex.props(styles.title)}>{task.title}</div>
    <Flexbox style={styles.wide}>
      <Flexbox style={styles.narrow}>
        Owner: <div>{task.owner?.userName}</div>
      </Flexbox>
      <Flexbox style={styles.narrow}>
        Status: <TaskStatusChip status={task.status} />
      </Flexbox>
      <Flexbox style={styles.narrow}>
        Priority: <TaskPriorityChip priority={task.priority} />
      </Flexbox>
      <Flexbox style={styles.narrow}>
        Size: <TaskSizeChip size={task.size} />
      </Flexbox>
    </Flexbox>
    <Flexbox style={styles.body}>
      {task.content}
    </Flexbox>
    <Flexbox style={[styles.footer, layout.column]}>
      <div {...stylex.props()}>Created: {formatDistance(task.createdAt, new Date(), { addSuffix: true })}</div>
      <div {...stylex.props()}>Updated: {formatDistance(task.updatedAt, new Date(), { addSuffix: true })}</div>
    </Flexbox>
  </Flexbox>;
}

const styles = stylex.create({
  narrow: {
    gap: '5px',
  },
  wide: {
    gap: '10px',
  },
  panel: {
    backgroundColor: 'white',
    padding: '10px',
    gap: '5px',
    maxHeight: '100%',
    borderRadius: '5px',
    height: '100%',
    // overflow: 'auto'
  },
  footer: {
    minHeight: '35%',
  },
  body: {
    // flexGrow: 1,
    fontSize: '14px',
    padding: '10 0 10 0'
  },
  title: {
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  }
});

export default TaskComposer;