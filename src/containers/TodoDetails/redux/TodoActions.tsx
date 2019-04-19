import * as constants from './constants';
import { saveTodo, editTodo } from './TodoApi';
import {
  TodoSaveFlow,
  TodoEditFlow,
  TodoEditSaveRunning,
  TodoEditSaveStatus
} from '../../../interfaces/TodoEditSaveRedux';
import { Todo } from '../../../interfaces/Todo';

export function saveTodoFlow (data: Todo): TodoSaveFlow {
  return {
    type: constants.saveTodoFlow,
    api: saveTodo,
    data,
  };
};

export function editTodoFlow (id: number, data: Todo): TodoEditFlow {
  return {
    type: constants.editTodoFlow,
    api: editTodo,
    id,
    data,
  };
};

export function saveTodoRunning (isRunning: boolean): TodoEditSaveRunning {
  return {
    type: constants.saveTodoLoading,
    payload: isRunning
  };
};

export function editTodoRunning (isRunning: boolean): TodoEditSaveRunning {
  return {
    type: constants.editTodoLoading,
    payload: isRunning
  };
};

export function saveTodoFinish (isRunning: number): TodoEditSaveStatus {
  return {
    type: constants.saveTodoFinish,
    payload: isRunning
  };
};

export function editTodoFinish (status: number): TodoEditSaveStatus {
  return {
    type: constants.editTodoFinish,
    payload: status
  };
};