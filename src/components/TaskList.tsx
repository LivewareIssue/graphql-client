import * as stylex from '@stylexjs/stylex';
import { graphql, useFragment, UseQueryLoaderLoadQueryOptions } from 'react-relay';
import { TaskList_fragment$key } from './__generated__/TaskList_fragment.graphql';
import { colors } from '../colors.stylex';
import TaskStatusChip from './TaskStatusChip';
import TaskPriorityChip from './TaskPriorityChip';
import TaskSizeChip from './TaskSizeChip';
import Flexbox from './layout/Flexbox';
import CopyButton from './CopyButton';
import { TaskComposerQuery$variables } from './__generated__/TaskComposerQuery.graphql';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

type Props = {
  fragmentKey: TaskList_fragment$key,
  style?: stylex.StyleXStyles,
  loadTaskComposerQuery: (variables: TaskComposerQuery$variables, options?: UseQueryLoaderLoadQueryOptions) => void
};

export const TaskList = ({fragmentKey, style, loadTaskComposerQuery}: Props) => {
  const data = useFragment(
    graphql`
      fragment TaskList_fragment on EntTask @relay(plural: true) {
        id
        title
        status
        size
        priority
        owner {
          id
          userName
        }
      }
    `,
    fragmentKey,
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTaskId = useMemo(() => {
    return searchParams.get('selectedTask');
  }, [searchParams]);

  return <div {...stylex.props(styles.panel, style)}>
    <table {...stylex.props(styles.table)}>
      <thead {...stylex.props(styles.header)}>
        <tr>
          <th {...stylex.props(styles.headerCell, styles.titleHeaderCell)}>Title</th>
          <th {...stylex.props(styles.headerCell, styles.ownerHeaderCell)}>Owner</th>
          <th {...stylex.props(styles.headerCell)}>Status</th>
          <th {...stylex.props(styles.headerCell)}>Priority</th>
          <th {...stylex.props(styles.headerCell)}>Size</th>
        </tr>
      </thead>
      <tbody {...stylex.props(styles.body)}>
      {
        data.map(task => (
          <tr key={task.id} {...stylex.props(styles.row, task.id === selectedTaskId && styles.selected)} onClick={() => {
              loadTaskComposerQuery({id: task.id});
              setSearchParams((currentSearchParams: URLSearchParams) => {
                const updatedSearchParams = new URLSearchParams(currentSearchParams);
                updatedSearchParams.set('selectedTask', task.id);
                return updatedSearchParams;
              });
            }}>
            <td {...stylex.props(styles.cell, styles.titleCell)}>
              <Flexbox style={styles.title}>
                {task.title}<CopyButton clipboardValue={task.title} tooltip='Copy task title to clipboard.'/>
              </Flexbox>
            </td>
            <td {...stylex.props(styles.cell, styles.ownerCell)}>{task.owner?.userName}</td>
            <td {...stylex.props(styles.cell)}><TaskStatusChip status={task.status} /></td>
            <td {...stylex.props(styles.cell)}><TaskPriorityChip priority={task.priority} /></td>
            <td {...stylex.props(styles.cell)}><TaskSizeChip size={task.size}/></td>
          </tr>
        ))
      }
      </tbody>
    </table>
  </div>;
}

const PORTRAIT = '@media (max-aspect-ratio: 1)';

const styles = stylex.create({
  panel: {
    maxHeight: '100%',
    overflowY: 'scroll',
    paddingRight: {
      default: '0px',
      [PORTRAIT]: '10px',
    },
    scrollbarGutter: 'stable',
    borderRadius: '5px',
    background: {
      default: 'white',
      [PORTRAIT]: 'transparent',
    },
  },
  title: {
    alignItems: 'center',
    gap: '5px',
  },
  body: {
    display: {
      default: null,
      [PORTRAIT]: 'flex',
    },
    flexDirection: 'column',
    gap: 10,
  },
  header: {
    display: {
      default: null,
      [PORTRAIT]: 'none',
    },
    zIndex: 1,
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
  },
  table: {
    backgroundColor: {
      default: 'white',
      [PORTRAIT]: 'transparent',
    },
    borderCollapse: 'collapse',
    // width: '100%',
  },
  selected: {
    backgroundColor: '#f0f0f0',
  },
  row: {
    display: {
      default: null,
      [PORTRAIT]: 'flex',
    },
    gap: '10px',
    right: '10px',
    flexWrap: {
      default: null,
      [PORTRAIT]: 'wrap',
    },
    backgroundColor: {
      default: 'white',
      ":hover": '#f0f0f0'
    },
    padding: {
      default: null,
      [PORTRAIT]: '10px',
    },
    borderTop: {
      default: `1px solid ${colors.lineColor}`,
      [PORTRAIT]: 'none',
    },
    borderRadius: {
      default: '0px',
      [PORTRAIT]: '5px',
    },
  },
  headerCell: {
    padding: '10',
    textAlign: 'center'
  },
  titleHeaderCell: {
    textAlign: 'start',
  },
  ownerHeaderCell: {
    textAlign: 'start'
  },
  cell: {
    padding: {
      default: '10px',
      [PORTRAIT]: '0px',
    },
    textAlign: 'center'
  },
  titleCell: {
    fontWeight: 600,
    textOverflow: 'ellipsis',
    textAlign: 'start',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    flexBasis: {
      default: null,
      [PORTRAIT]: '100%',
    }
  },
  ownerCell: {
    textAlign: 'start'
  }
});