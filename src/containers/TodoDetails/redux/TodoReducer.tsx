import * as constants from './constants';
import { action } from '../../../interfaces/action';
import { TodoEditSaveState } from '../../../interfaces/TodoEditSaveRedux';

export default function (state = constants.INITIAL_STATE, action: action): TodoEditSaveState {
  switch (action.type) {
    case constants.saveTodoLoading:
    case constants.editTodoLoading:
      return {
        ...state,
        isRunning: action.payload
      };
    case constants.saveTodoFinish:
    case constants.editTodoFinish:
      return {
        ...state,
        status: action.payload
      };
    case constants.saveTodoClean:
    case constants.editTodoClean:
      return constants.INITIAL_STATE;
    default:
      return state;
  }
}