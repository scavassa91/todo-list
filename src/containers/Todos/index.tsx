import { connect } from 'react-redux';
import Todos from './Todos';
import { listTodosFlow } from '../Todos/redux/TodosActions';
import { ReduxState } from '../../interfaces/ReduxState';
import { Dispatch } from 'redux';
import { Todo } from '../../interfaces/Todo';

interface TodosDispatchInterface {
  getAllTodos: () => void;
}

interface TodosStateProps {
  isLoading: boolean;
  todos: Todo[];
}

const mapStateToProps = (state: ReduxState): TodosStateProps => ({
  isLoading: state.todos.isRunning,
  todos: Object.values(state.todos.todos)
});

const mapDispatchToProps = (dispatch: Dispatch): TodosDispatchInterface => ({
  getAllTodos: () => dispatch(listTodosFlow())
});

const merge = (
  state: TodosStateProps,
  dispatch: TodosDispatchInterface,
  ownProps: any) => ({
  ...state,
  ...dispatch,
  ...ownProps,
  showTodoDetails: (id: number) => ownProps.history.push(`/todos/${id}`)
});

export default connect(mapStateToProps, mapDispatchToProps ,merge)(Todos);