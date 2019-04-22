import { TodosState } from "../../../interfaces/Todo";

export const getTodosFlow: string = 'todo/GET_TODOS_FLOW';
export const getTodosLoading: string = 'todo/GET_TODOS_LOADING';
export const getTodosFinish: string = 'todo/GET_TODOS_FINISH';
export const getTodosClean: string = 'todo/GET_TODOS_CLEAN';

export const editTodoFlow: string = 'todo/EDIT_TODO_FLOW';
export const editTodoLoading: string = 'auth/EDIT_TODO_LOADING';
export const editTodoFinish: string = 'todo/EDIT_TODO_FINISH';
export const editTodoClean: string = 'todo/EDIT_TODO_CLEAN';

export const saveTodoFlow: string = 'todo/SAVE_TODO_FLOW';
export const saveTodoLoading: string = 'todo/SAVE_TODO_LOADING';
export const saveTodoFinish: string = 'todo/SAVE_TODO_FINISH';
export const saveTodoClean: string = 'todo/SAVE_TODO_CLEAN';

export const deleteTodoFlow: string = 'todo/DELETE_TODO_FLOW';
export const deleteTodoLoading: string = 'todo/DELETE_TODO_LOADING';
export const deleteTodoFinish: string = 'todo/DELETE_TODO_FINISH';
export const deleteTodoClean: string = 'todo/DELETE_TODO_CLEAN';

export const INITIAL_STATE: TodosState = {
  todos: {},
  isRunning: false,
  saveEditstatus: 0,
  deleteStatus: 0,
  getStatus: 0,
}