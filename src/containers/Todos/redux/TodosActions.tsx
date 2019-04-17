import * as constants from './constants';
import { getAllToDos } from './TodosApi';
import {
  TodoFlowAction,
  TodoRunningAction,
  ITodo,
  TodoFinishAction,
  Todo,
  TodoErrorAction
} from '../../../interfaces/Todo';

export function listTodosFlow(): TodoFlowAction {
  return {
    type: constants.listTasksFlow,
    api: getAllToDos
  };
};

export function listTodosRunning(isRunning: boolean): TodoRunningAction {
  return {
    type: constants.listTasksLoading,
    payload: isRunning
  };
};

export function listTodosFinish(todos: ITodo<Todo>): TodoFinishAction {
  return {
    type: constants.listTasksFinish,
    payload: todos
  };
};

export function listTodosError(): TodoErrorAction {
  return {
    type: constants.listTasksError,
  };
};