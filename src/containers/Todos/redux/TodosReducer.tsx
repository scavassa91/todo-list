import * as constants from './constants';
import { action } from '../../../interfaces/action';
import { TodosState } from '../../../interfaces/Todo';

export default function (state = constants.INITIAL_STATE, action: action): TodosState {
  switch(action.type) {
    case constants.listTasksLoading:
      return {
        ...state,
        isRunning: action.payload
      };
    case constants.listTasksFinish:
      return {
        ...state,
        todos: action.payload
      };
    case constants.listTasksError:
      return constants.INITIAL_STATE;
    default:
      return constants.INITIAL_STATE;
  };
}