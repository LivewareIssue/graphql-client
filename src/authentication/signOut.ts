import { commitLocalUpdate } from "relay-runtime";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

export default function signOut(env: RelayModernEnvironment) {
  localStorage.removeItem('token');
  commitLocalUpdate(env, store => {
    store.invalidateStore();
  });
  window.location.reload();
}