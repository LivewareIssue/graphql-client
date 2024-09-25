import ReactModal from "react-modal";
import { graphql, useMutation } from "react-relay";
import { SignInModalMutation } from './__generated__/SignInModalMutation.graphql';
import { useState } from "react";

type Props = {isOpen: boolean};

const SignInModal = ({isOpen}: Props) => {
  const [commitMutation, inFlight] = useMutation<SignInModalMutation>(
    graphql`
      mutation SignInModalMutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
          query {
            viewer {
              id
              __typename
              userName
            }
          }
          token
        }
      }
    `,
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(): void {
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

  return <ReactModal isOpen={isOpen} style={{content:{left: '20%', right: '20%', bottom: 'auto', top: '20%'}}}>
    <form onSubmit={onSubmit}>
      <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', rowGap: '10px'}}>
        <input style={{width: '50%'}} type="text" placeholder="Email" onSubmit={onSubmit} onChange={e => setEmail(e.target.value)}/>
        <input style={{width: '50%'}} type="password" placeholder="Password" onSubmit={onSubmit} onChange={e => setPassword(e.target.value)}/>
        <button style={{width: '50%', height: '40px'}} tabIndex={1} disabled={inFlight} onClick={onSubmit} >Sign In</button>
      </div>
    </form>
  </ReactModal>;
}

export default SignInModal;