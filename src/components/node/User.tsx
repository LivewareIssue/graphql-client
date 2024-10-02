import * as stylex from '@stylexjs/stylex';
import { graphql, useFragment } from 'react-relay';
import { User_fragment$key } from './__generated__/User_fragment.graphql';

type Props = {
  fragmentKey?: User_fragment$key
};

export const User = ({fragmentKey}: Props) => {
  const data = useFragment(
    graphql`
      fragment User_fragment on User {
        id
        __typename
        userName
        email
      }
    `,
    fragmentKey,
  );

  return <div>{JSON.stringify(data, null, 2)}</div>
}

const styles = stylex.create({

});