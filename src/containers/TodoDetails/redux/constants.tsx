import { TodoEditSaveState } from "../../../interfaces/TodoEditSaveRedux";

export const editTodoFlow: string = 'todo/EDIT_TODO_FLOW';
export const editTodoLoading: string = 'auth/EDIT_TODO_LOADING';
export const editTodoFinish: string = 'todo/EDIT_TODO_FINISH';
export const editTodoClean: string = 'todo/EDIT_TODO_CLEAN';

export const saveTodoFlow: string = 'todo/SAVE_TODO_FLOW';
export const saveTodoLoading: string = 'todo/SAVE_TODO_LOADING';
export const saveTodoFinish: string = 'todo/SAVE_TODO_FINISH';
export const saveTodoClean: string = 'todo/SAVE_TODO_CLEAN';

export const INITIAL_STATE: TodoEditSaveState = {
  isRunning: false,
  status: 0,
}