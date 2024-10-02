import { commitLocalUpdate } from "react-relay";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

export default function signOut(env: RelayModernEnvironment) {
  localStorage.removeItem('token');
  commitLocalUpdate(env, (store) => {
    store.getRoot().setValue(null, 'viewer');
  });
}