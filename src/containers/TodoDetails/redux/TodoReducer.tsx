import * as constants from './constants';
import { action } from '../../../interfaces/action';
import { TodosState } from '../../../interfaces/Todo';

export default function (state = constants.INITIAL_STATE, action: action): TodosState {
  switch (action.type) {
    case constants.getTodosLoading:
    case constants.saveTodoLoading:
    case constants.editTodoLoading:
    case constants.deleteTodoLoading:
      return {
        ...state,
        isRunning: action.payload
      };
    case constants.saveTodoFinish:
    case constants.editTodoFinish:
      return {
        ...state,
        saveEditstatus: action.payload
      };
    case constants.deleteTodoFinish:
      return {
        ...state,
        deleteStatus: action.payload.status,
        todos: action.payload.todos
      };
    case constants.getTodosFinish:
      return {
        ...state,
        getStatus: action.payload.status,
        todos: action.payload.todos
      };
    case constants.getTodosClean:
    case constants.saveTodoClean:
    case constants.editTodoClean:
    case constants.deleteTodoClean:
      return constants.INITIAL_STATE;
    default:
      return state;
  }
}