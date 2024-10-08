import { default as TasksPageQuery } from './__generated__/TasksPageQuery.graphql';
import { default as SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';
import TasksPage from './TasksPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const tasksPageEntryPoint: SimpleEntryPoint<typeof TasksPage> = {
  root: JSResource('TasksPage', () => import('./TasksPage')),
  getPreloadProps(_params) {
    return {
      queries: {
        tasksPageQuery: {
          parameters: TasksPageQuery,
          variables: {

          }
        },
        sideNavQuery: {
          parameters: SideNavQuery,
          variables: {

          }
        }
      },
      options: {
        fetchPolicy: 'store-or-network'
      }
    };
  }
}

export default tasksPageEntryPoint;