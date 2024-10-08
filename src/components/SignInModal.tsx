import * as stylex from '@stylexjs/stylex';
import { graphql, useFragment, useMutation } from "react-relay";
import { SignInModalMutation } from './__generated__/SignInModalMutation.graphql';
import { useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import Input from './Input';
import { colors } from '../colors.stylex';
import Button from './Button';
import Flexbox from './layout/Flexbox';
import { SignInModal_fragment$key } from './__generated__/SignInModal_fragment.graphql';

type Props = {
  fragmentKey: SignInModal_fragment$key;
};

const SignInModal = ({fragmentKey} : Props) => {
  const data = useFragment(graphql`
    fragment SignInModal_fragment on Query {
      viewer {
        id
      }
    }
  `, fragmentKey);

  const isOpen = data.viewer == null;

  const [commitMutation, inFlight] = useMutation<SignInModalMutation>(
    graphql`
      mutation SignInModalMutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
          query {
            ...SideNavFooter_fragment
          }
          token
        }
      }
    `,
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn(): void {
    commitMutation({
    variables: {
      email: email,
      password: password,
    },
    onCompleted: (response) => {
      localStorage.setItem("token", response.signIn.token);
    },
    updater: (store) => {
      const payload = store.getRootField('signIn');
      const query = payload.getLinkedRecord('query');
      const viewer = query.getLinkedRecord('viewer');
      const root = store.getRoot();
      root.setLinkedRecord(viewer, 'viewer');
    }
  })}

  return <Dialog.Root open={isOpen}>
    <Dialog.Portal>
    <Dialog.Overlay {...stylex.props(styles.overlay)}/>
    <Dialog.Content {...stylex.props(styles.dialogContent)}>
      <form onSubmit={e => {
        e.preventDefault();
        signIn();
      }}>
        <Dialog.Title {...stylex.props(styles.dialogTitle)}>Sign In</Dialog.Title>
        <Dialog.Description {...stylex.props(styles.dialogDescription)}>
          Sign in to your account to continue
        </Dialog.Description>
        <fieldset {...stylex.props(styles.fieldset)}>
          <label {...stylex.props(styles.label)} htmlFor="email">
            Email
          </label>
          <Input type='email' placeholder='user@example.com' onChange={e => setEmail(e.target.value)}/>
        </fieldset>
        <fieldset {...stylex.props(styles.fieldset)}>
          <label {...stylex.props(styles.label)} htmlFor="password">
            Password
          </label>
          <Input type='password' onChange={e => setPassword(e.target.value)}/>
        </fieldset>
        <Dialog.Close asChild>
          <Flexbox style={styles.footer}>
            <Button disabled={inFlight} loading={inFlight}>Continue</Button>
          </Flexbox>
        </Dialog.Close>
      </form>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
}

const styles = stylex.create({
  overlay: {
    backgroundColor: colors.background,
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.background,
    borderWidth: 'thin',
    borderColor: colors.lineColor,
    borderStyle: 'solid',
    borderRadius: '6px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    ":focus": {
      outline: 'none'
    },
    userSelect: 'none',
    padding: '20px',
    zIndex: 2,
  },
  dialogTitle: {
    margin: 0,
    fontWeight: 700,
    fontSize: '20px',
    textAlign: 'center',
  },
  dialogDescription: {
    margin: '10px 0 20px',
    fontSize: '16px',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  accentButton: {
    backgroundColor: colors.accent,
    color: 'white',
    fontWeight: 700,
    ":hover": {
      backgroundColor: colors.accentShade
    }
  },
  fieldset: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    alignItems: 'left',
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    color: colors.primaryText,
    fontWeight: 700,
  },
  footer: {
    justifyContent:'right',
    width: '100%',
  }
});

export default SignInModal;