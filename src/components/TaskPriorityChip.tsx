import * as stylex from '@stylexjs/stylex';
import { TaskPriority } from './__generated__/TaskEditor_fragment.graphql';
import Chip from './Chip';
import { colors } from '../colors.stylex';

type Props = {
  priority: TaskPriority,
  children?: React.ReactNode,
};

function getStatusStyle(priority: TaskPriority) {
  switch (priority) {
    case 'LOW':
      return styles.low;
    case 'MEDIUM':
      return styles.medium;
    case 'HIGH':
      return styles.high;
    case 'CRITICAL':
      return styles.critical;
    default:
      return styles.base;
  }
}


const TaskPriorityChip = ({priority}: Props) => {
  return <Chip style={[styles.base, getStatusStyle(priority)]}>{priority}</Chip>;
}

const styles = stylex.create({
  base: {
    whiteSpace: 'nowrap',
  },
  low: {
    backgroundColor: colors.blue,
  },
  medium: {
    backgroundColor: colors.green,
  },
  high: {
    backgroundColor: colors.orange,
  },
  critical: {
    backgroundColor: colors.red,
  },
});

export default TaskPriorityChip;