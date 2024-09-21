import {
  type EntryPointRouteObject,
  preparePreloadableRoutes,
} from "@loop-payments/react-router-relay";
import { useMemo, useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import authorPageEntryPoint from "./pages/AuthorPage.entrypoint";
import { useRelayEnvironment } from "react-relay";

const MY_ROUTES: EntryPointRouteObject[] = [
  {
    path: "/author",
    entryPoint: authorPageEntryPoint,
  },
];

export default function Router() {
  const environment = useRelayEnvironment();
  // Potentially unnecessary if you never change your environment
  const environmentRef = useRef(environment);
  environmentRef.current = environment;

  const router = useMemo(() => {
    const routes = preparePreloadableRoutes(MY_ROUTES, {
      getEnvironment() {
        return environmentRef.current;
      },
    });

    return createBrowserRouter(routes);
  }, []);

  return <RouterProvider router={router} />;
}