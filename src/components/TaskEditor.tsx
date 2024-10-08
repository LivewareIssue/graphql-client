import * as stylex from '@stylexjs/stylex';
import { graphql, useFragment } from 'react-relay';
import { TaskEditor_fragment$key } from './__generated__/TaskEditor_fragment.graphql';
import { TaskStatusSelect } from './TaskStatusSelect';

type Props = {
  fragmentKey: TaskEditor_fragment$key
};

export const TaskEditor = ({fragmentKey}: Props) => {
  const data = useFragment(
    graphql`
      fragment TaskEditor_fragment on EntTask {
        title
        ...TaskStatusSelect_fragment
      }
    `,
    fragmentKey,
  );

  return <TaskStatusSelect fragmentKey={data} />;
}

const styles = stylex.create({

});