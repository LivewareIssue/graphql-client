import * as stylex from '@stylexjs/stylex';
import { graphql, useFragment } from 'react-relay';
import { TaskStatusSelect_fragment$key } from './__generated__/TaskStatusSelect_fragment.graphql';

type Props = {
  fragmentKey?: TaskStatusSelect_fragment$key
};

export const TaskStatusSelect = ({fragmentKey}: Props) => {
  const data = useFragment(
    graphql`
      fragment TaskStatusSelect_fragment on EntTask {
        status
      }
    `,
    fragmentKey,
  );

  return <div>{JSON.stringify(data)}</div>
}

const styles = stylex.create({

});