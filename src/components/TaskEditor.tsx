import * as stylex from '@stylexjs/stylex';
import { graphql, useFragment } from 'react-relay';
import { TaskEditor_fragment$key } from './__generated__/TaskEditor_fragment.graphql';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { colors } from '../colors.stylex';
import TaskStatusChip from './TaskStatusChip';
import TaskPriorityChip from './TaskPriorityChip';
import TaskSizeChip from './TaskSizeChip';
import Flexbox from './layout/Flexbox';
import CopyButton from './CopyButton';

type Props = {
  fragmentKey: TaskEditor_fragment$key
};

export const TaskEditor = ({fragmentKey}: Props) => {
  const data = useFragment(
    graphql`
      fragment TaskEditor_fragment on EntTask @relay(plural: true) {
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

  return <PanelGroup direction='horizontal'>
    <Panel id='tasks' order={1} minSize={30} defaultSize={50}>
      <div {...stylex.props(styles.panel)}>
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
              <tr key={task.id} {...stylex.props(styles.row)}>
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
      </div>
    </Panel>
    <PanelResizeHandle {...stylex.props(styles.handle)} />
    <Panel id='composer' order={2} minSize={30} defaultSize={50}>
      <div {...stylex.props(styles.panel, styles.editor)} />
    </Panel>
  </PanelGroup>;
}

const PORTRAIT = '@media (max-aspect-ratio: 1)';

const styles = stylex.create({
  title: {
    alignItems: 'center',
    gap: '5px',
  },
  panel: {
    maxHeight: '100%',
    overflow: 'auto',
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
  handle: {
    width: '1px',
    backgroundColor: colors.lineColor,
    marginLeft: '10px',
    marginRight: '10px'
  },
  table: {
    backgroundColor: {
      default: 'white',
      [PORTRAIT]: 'transparent',
    },
    borderCollapse: 'collapse',
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
  editor: {
    backgroundColor: 'white',
    padding: '10px',
    height: '100%',
    borderRadius: 5,
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