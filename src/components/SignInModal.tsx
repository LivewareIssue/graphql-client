import * as stylex from '@stylexjs/stylex';
import { graphql, useMutation } from "react-relay";
import { SignInModalMutation } from './__generated__/SignInModalMutation.graphql';
import { useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';


export type Props = {
  isOpen: boolean;
};

const SignInModal = ({isOpen} : Props) => {
  const [commitMutation, inFlight] = useMutation<SignInModalMutation>(
    graphql`
      mutation SignInModalMutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
          query {
            viewer {
              id
              __typename
            }
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
    <Dialog.Overlay/>
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
          <input {...stylex.props(styles.input)} id="email" type='email' placeholder='user@example.com' onChange={e => setEmail(e.target.value)}/>
        </fieldset>
        <fieldset {...stylex.props(styles.fieldset)}>
          <label {...stylex.props(styles.label)} htmlFor="password">
            Password
          </label>
          <input {...stylex.props(styles.input)} id="password" type='password' onChange={e => setPassword(e.target.value)}/>
        </fieldset>
        <Dialog.Close asChild>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
            <button disabled={inFlight} {...stylex.props(styles.button, styles.accentButton)}>Continue</button>
          </div>
        </Dialog.Close>
      </form>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
}

const styles = stylex.create({
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderWidth: 'thin',
    borderColor: '#d1d1d1',
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
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    padding: '12px 12px',
    fontSize: '14px',
    lineHeight: 1,
    fontWeight: 500,
  },
  accentButton: {
    backgroundColor: '#1b75e3',
    color: 'white',
    fontWeight: 700,
    ":hover": {
      backgroundColor: '#1869cc'
    }
  },
  fieldset: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    alignItems: 'left',
    marginBottom: '15px',
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderColor: '#dadde0',
    borderStyle: 'solid',
    borderRadius: '3px',
    padding: '10px 10px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1,
    color: '#65676b',
    ":focus": {
      boxShadow: 'inset 0 0 0 3px #BAD5F7',
      borderColor: '#1B74E4',
    }
  },
  label: {
    fontSize: '14px',
    color: 'black',
    fontWeight: 700,
  }
});

export default SignInModal;