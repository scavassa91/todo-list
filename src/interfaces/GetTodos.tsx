import * as constants from '../containers/TodoDetails/redux/constants';
import { ITodo, Todo } from './Todo';

export interface GetTodosFlow {
  type: typeof constants.getTodosFlow;
  api: any;
};

export interface GetTodosRunning {
  type: typeof constants.getTodosLoading;
  payload: boolean;
};

export interface GetTodosFinish {
  type: typeof constants.getTodosFinish;
  payload: {
    todos: ITodo<Todo>;
    status: number;
  };
};

export interface GetTodosClean {
  type: typeof constants.getTodosClean;
};
