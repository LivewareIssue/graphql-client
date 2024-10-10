import * as stylex from '@stylexjs/stylex';
import { TaskStatus } from './__generated__/TaskEditor_fragment.graphql';
import Chip from './Chip';
import { colors } from '../colors.stylex';

type Props = {
  status: TaskStatus,
  children?: React.ReactNode,
};

function getStatusStyle(status: TaskStatus) {
  switch (status) {
    case 'BLOCKED':
      return styles.blocked;
    case 'CLOSED':
      return styles.closed;
    case 'IN_PROGRESS':
      return styles.inProgress;
    case 'OPEN':
      return styles.open;
    default:
      return styles.base;
  }
}

function getStatusLabel(status: TaskStatus) {
  switch (status) {
    case 'BLOCKED':
      return 'BLOCKED';
    case 'CLOSED':
      return 'CLOSED';
    case 'IN_PROGRESS':
      return 'IN PROGRESS';
    case 'OPEN':
      return 'OPEN';
    default:
      return 'UNKNOWN';
  }
}

const TaskStatusChip = ({status}: Props) => {
  return <Chip style={[styles.base, getStatusStyle(status)]}>{getStatusLabel(status)}</Chip>;
}

const styles = stylex.create({
  base: {
    whiteSpace: 'nowrap',
  },
  closed: {
    backgroundColor: colors.grey,
  },
  open: {
    backgroundColor: colors.blue,
  },
  inProgress: {
    backgroundColor: colors.green,
  },
  blocked: {
    backgroundColor: colors.red,
  },
});

export default TaskStatusChip;