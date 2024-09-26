import * as stylex from '@stylexjs/stylex';
import { commitLocalUpdate, graphql, useFragment, useRelayEnvironment } from "react-relay"
import { ProfilePicture_viewer$key } from "./__generated__/ProfilePicture_viewer.graphql";
import { PiSignOutFill } from "react-icons/pi";

type Props = {
  viewer: ProfilePicture_viewer$key
}

const ProfilePicture = ({viewer}: Props) => {
  const data = useFragment(graphql`
    fragment ProfilePicture_viewer on User {
      userName
    }
  `, viewer);

  var env = useRelayEnvironment();

  const signOut = () => {
    localStorage.removeItem('token');
    commitLocalUpdate(env, (store) => {
      store.getRoot().setValue(null, 'viewer');
    });
  }

  return <div {...stylex.props(styles.container)}>
      <button {...stylex.props(styles.button)}>
        <div {...stylex.props(styles.picture)}>
          <span {...stylex.props(styles.span)}></span>
          <b {...stylex.props(styles.text)}>{data.userName?.substring(0,1)}</b>
        </div>
      </button>
    <div style={{color: '#3e3937', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <p>{data.userName}</p>
    </div>
    <div style={{flexGrow: 1}}></div>
    <button onClick={signOut} {...stylex.props(styles.button)}>
    <PiSignOutFill size={16} {...stylex.props(styles.icon)}/>
    </button>
  </div>
}

const styles = stylex.create({
  icon: {
    color: '#4390e8',
    marginRight: 5,
    borderRadius: '50%',
    ":hover": {
      color: 'white',
      backgroundColor: '#4390e8'
    },
    padding: 5
  },
  button: {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: '0',
    outline: 'inherit',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    fontFamily: '"Kumbh Sans", sans-serif',
    fontSize: '12',
    fontWeight: '400',
    userSelect: 'none',
    cursor: 'default',
    color: '#d84500',
  },
  picture: {
    width: '26px',
    height: '26px',
    textAlign: 'center',
    borderRadius: '50%',
    backgroundColor: '#FFD7C4',
    alignSelf: 'center',
    ":hover": {
      backgroundColor: '#f8b47c',
      color: '#c23d1e',
    }
  },
  span: {
    height: '26px',
    display: 'inline-block',
    zoom: 1,
    "*display": 'inline',
    verticalAlign: 'middle'
  },
  text: {
    display: 'inline-block',
    zoom: 1,
    "*display": 'inline',
    verticalAlign: 'middle',
  }
});

export default ProfilePicture;