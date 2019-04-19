import {
  listTasksFlow,
  listTasksLoading,
  listTasksFinish,
  listTasksError
} from "../containers/Todos/redux/constants";

export interface Todo {
  id?: string;
  text: string;
  created?: string;
  updated?: string;
  isCompleted: boolean;
  urgency: number;
}

export interface ITodo<T> {
  [id: string]: T;
}

export interface TodosState {
  isRunning: boolean;
  todos: ITodo<Todo>;
}

export interface TodoFlowAction {
  type: typeof listTasksFlow;
  api: any;
}

export interface TodoRunningAction {
  type: typeof listTasksLoading;
  payload: boolean;
}

export interface TodoFinishAction {
  type: typeof listTasksFinish;
  payload: ITodo<Todo>;
}

export interface TodoErrorAction {
  type: typeof listTasksError;
}