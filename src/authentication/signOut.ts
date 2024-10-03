import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

export default function signOut(env: RelayModernEnvironment) {
  localStorage.removeItem('token');
  window.location.reload();
}