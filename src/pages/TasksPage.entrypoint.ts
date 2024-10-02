import { default as TasksPageQuery } from './__generated__/TasksPageQuery.graphql';
import TasksPage from './TasksPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const tasksPageEntryPoint: SimpleEntryPoint<typeof TasksPage> = {
  root: JSResource('TasksPage', () => import('./TasksPage')),
  getPreloadProps(_params) {
    return {
      queries: {
        query: {
          parameters: TasksPageQuery,
          variables: {

          }
        }
      }
    };
  }
}

export default tasksPageEntryPoint;