import { Auth } from './Auth';
import { TodosState } from './Todo';
import { TodoEditSaveState } from './TodoEditSaveRedux';

export interface ReduxState {
  auth: Auth;
  todos: TodosState;
  todo: TodoEditSaveState;
}
