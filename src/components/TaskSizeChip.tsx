import * as stylex from '@stylexjs/stylex';
import { TaskSize } from './__generated__/TaskEditor_fragment.graphql';
import Chip from './Chip';
import { colors } from '../colors.stylex';

type Props = {
  size: TaskSize,
  children?: React.ReactNode,
};

function getStatusStyle(size: TaskSize) {
  switch (size) {
    case 'S':
      return styles.small;
    case 'M':
      return styles.medium;
    case 'L':
      return styles.large;
    case 'XL':
      return styles.extraLarge;
    default:
      return styles.base;
  }
}


const TaskSizeChip = ({size}: Props) => {
  return <Chip style={[styles.base, getStatusStyle(size)]}>{size}</Chip>;
}

const styles = stylex.create({
  base: {
    whiteSpace: 'nowrap',
  },
  small: {
    backgroundColor: colors.blue,
  },
  medium: {
    backgroundColor: colors.green,
  },
  large: {
    backgroundColor: colors.orange,
  },
  extraLarge: {
    backgroundColor: colors.red,
  },
});

export default TaskSizeChip;