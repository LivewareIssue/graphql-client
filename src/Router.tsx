import {
  type EntryPointRouteObject,
  preparePreloadableRoutes,
} from "@loop-payments/react-router-relay";
import { useContext, useMemo, useRef } from "react";
import { createBrowserRouter, RouterProvider, UNSAFE_DataRouterContext } from "react-router-dom";

import homePageEntryPoint from "./pages/HomePage.entrypoint";
import { useRelayEnvironment } from "react-relay";
import tasksPageEntryPoint from "./pages/TasksPage.entrypoint";
import { ClipboardIcon, GraphIcon, HomeIcon, Icon, PuzzlePieceIcon, UserCircleIcon } from "./components/Icon";
import componentsPageEntryPoint from "./pages/ComponentsPage.entrypoint";
import accountPageEntryPoint from "./pages/AccountPage.entrypoint";
import nodePageEntryPoint from "./pages/NodePage.entrypoint";

type MyAppEntryPoint = EntryPointRouteObject & {
  icon: Icon,
  title: string, 
  label?: string,
  exclude?: boolean
};

const ROUTES: MyAppEntryPoint[] = [
  {
    path: "/",
    entryPoint: homePageEntryPoint,
    icon: HomeIcon,
    title: "MyApp",
    label: "Home"
  },
  {
    path: "/tasks",
    entryPoint: tasksPageEntryPoint,
    icon: ClipboardIcon,
    title: "Tasks"
  },
  {
    path: "/components",
    entryPoint: componentsPageEntryPoint,
    icon: PuzzlePieceIcon,
    title: "Components"
  },
  {
    path: "/account",
    entryPoint: accountPageEntryPoint,
    icon: UserCircleIcon,
    title: "Account",
    exclude: true
  },
  // {
  //   path: "/node/:id",
  //   entryPoint: nodePageEntryPoint,
  //   icon: GraphIcon,
  //   title: "Node",
  //   exclude: true,
  // }
];

export const useRoutes = () => {
  const dataRouterContext = useContext(UNSAFE_DataRouterContext);
  return dataRouterContext!.router.routes.map(route => route as MyAppEntryPoint);
}

export const useMatch = () => {
  const dataRouterContext = useContext(UNSAFE_DataRouterContext);
  return dataRouterContext!.router.state.matches.find(Boolean)?.route as MyAppEntryPoint;
}

export default function Router() {
  const environment = useRelayEnvironment();
  const environmentRef = useRef(environment);
  environmentRef.current = environment;

  (window as unknown as { store: any })['store'] = environment.getStore();

  const router = useMemo(() => {
    const routes = preparePreloadableRoutes(ROUTES, {
      getEnvironment() {
        return environmentRef.current;
      },
    });

    return createBrowserRouter(routes);
  }, []);

  return <RouterProvider router={router} />;
}