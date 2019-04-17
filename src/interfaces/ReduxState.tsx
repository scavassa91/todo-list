import { Auth } from './Auth';
import { TodosState } from './Todo';

export interface ReduxState {
  auth: Auth;
  todos: TodosState;
}
