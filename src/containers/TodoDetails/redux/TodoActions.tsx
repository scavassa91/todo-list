import * as constants from './constants';
import { saveTodo, editTodo, deleteTodo } from './TodoApi';
import { getAllToDos } from './TodoApi';
import {
  TodoSaveFlow,
  TodoEditFlow,
  TodoEditSaveRunning,
  TodoEditSaveStatus,
  TodoSaveCleanCleanStatus
} from '../../../interfaces/TodoEditSave';
import { Todo, ITodo } from '../../../interfaces/Todo';
import {
  GetTodosFlow,
  GetTodosRunning,
  GetTodosFinish,
  GetTodosClean
} from '../../../interfaces/GetTodos';
import {
  DeleteTodoFinish,
  DeleteTodoRunning,
  DeleteTodoFlow
} from '../../../interfaces/DeleteTodo';

export function getTodosFlow(): GetTodosFlow {
  return {
    type: constants.getTodosFlow,
    api: getAllToDos
  };
};

export function getTodosRunning(isRunning: boolean): GetTodosRunning {
  return {
    type: constants.getTodosLoading,
    payload: isRunning
  };
};

export function getTodosFinish(status: number, todos: ITodo<Todo>): GetTodosFinish {
  return {
    type: constants.getTodosFinish,
    payload: {
      status,
      todos
    }
  };
};

export function getTodosClean(): GetTodosClean {
  return {
    type: constants.getTodosClean,
  };
};

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

export function deleteTodoFlow (id: string): DeleteTodoFlow {
  return {
    type: constants.deleteTodoFlow,
    api: deleteTodo,
    id,
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

export function deleteTodoRunning (isRunning: boolean): DeleteTodoRunning {
  return {
    type: constants.deleteTodoLoading,
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

export function deleteTodoFinish (status: number, todos: ITodo<Todo>): DeleteTodoFinish {
  return {
    type: constants.deleteTodoFinish,
    payload: {
      status,
      todos
    }
  };
};

export function saveTodoClean (): TodoSaveCleanCleanStatus {
  return {
    type: constants.saveTodoClean
  };
};

export function editTodoClean (): TodoSaveCleanCleanStatus {
  return {
    type: constants.editTodoClean
  };
};

export function deleteTodoClean (): TodoSaveCleanCleanStatus {
  return {
    type: constants.deleteTodoClean
  };
};
