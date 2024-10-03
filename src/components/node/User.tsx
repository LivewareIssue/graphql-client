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
        roles
      }
    `,
    fragmentKey,
  );

  return data && <div {...stylex.props(styles.grid)}>
    <span {...stylex.props(styles.cell, styles.name)}>ID:</span>
    <span {...stylex.props(styles.cell)}>{data.id}</span>
    <span {...stylex.props(styles.cell, styles.name)}>User Name:</span>
    <span {...stylex.props(styles.cell)}>{data.userName}</span>
    <span {...stylex.props(styles.cell, styles.name)}>Email:</span>
    <span {...stylex.props(styles.cell)}>{data.email}</span>
    <span {...stylex.props(styles.cell, styles.name)}>Roles:</span>
    <span {...stylex.props(styles.cell)}>{`[${data.roles.join(', ')}]`}</span>
  </div>
}

const styles = stylex.create({
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  cell: {
    padding: '4px',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'end',
    paddingRight: '8px',
  }
});