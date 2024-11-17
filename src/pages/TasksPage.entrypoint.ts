import { default as TasksPageQuery } from './__generated__/TasksPageQuery.graphql';
import { default as SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';
import { default as TaskComposerQuery } from '../components/__generated__/TaskComposerQuery.graphql';
import TasksPage from './TasksPage';
import { JSResource, SimpleEntryPoint } from '@loop-payments/react-router-relay';

const tasksPageEntryPoint: SimpleEntryPoint<typeof TasksPage> = {
  root: JSResource('TasksPage', () => import('./TasksPage')),
  getPreloadProps(params) {
    const queries = {
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
    };
    
    const id = new URL(params.request.url).searchParams.get('selectedTask');
    if (id != null) {
      queries.taskComposerQuery = {
        parameters: TaskComposerQuery,
        variables: {
          id
        }
      };
    }

    return {
      queries,
      options: {
        fetchPolicy: 'store-or-network'
      }
    };
  }
}

export default tasksPageEntryPoint;