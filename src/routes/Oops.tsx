import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Oops() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {isRouteErrorResponse(error) && <p><i>{error.statusText}</i></p>}
    </div>
  );
}