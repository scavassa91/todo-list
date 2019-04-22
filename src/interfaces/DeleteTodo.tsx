import * as constants from '../containers/TodoDetails/redux/constants';
import { ITodo, Todo } from './Todo';

export interface DeleteTodoFlow {
  type: typeof constants.deleteTodoFlow;
  api: any;
  id: string;
};

export interface DeleteTodoRunning {
  type: typeof constants.deleteTodoLoading;
  payload: boolean;
};

export interface DeleteTodoFinish {
  type: typeof constants.deleteTodoFinish;
  payload: {
    todos: ITodo<Todo>;
    status: number;
  };
};
