import {
  type EntryPointRouteObject,
  preparePreloadableRoutes,
} from "@loop-payments/react-router-relay";
import { useMemo, useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import homePageEntryPoint from "./pages/HomePage.entrypoint";
import { useRelayEnvironment } from "react-relay";

const MY_ROUTES: EntryPointRouteObject[] = [
  {
    path: "/",
    entryPoint: homePageEntryPoint,
  },
];

export default function Router() {
  const environment = useRelayEnvironment();
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