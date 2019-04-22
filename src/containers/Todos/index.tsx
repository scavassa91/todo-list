import { connect } from 'react-redux';
import Todos from './Todos';
import { ReduxState } from '../../interfaces/ReduxState';
import { Dispatch } from 'redux';
import { Todo } from '../../interfaces/Todo';
import { deleteTodoFlow, getTodosFlow } from '../TodoDetails/redux/TodoActions';

interface TodosDispatchInterface {
  getAllTodos: () => void;
  deleteTodo: (id: string) => void;
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
  getAllTodos: () => dispatch(getTodosFlow()),
  deleteTodo: (id: string) => dispatch(deleteTodoFlow(id))
});

const merge = (
  state: TodosStateProps,
  dispatch: TodosDispatchInterface,
  ownProps: any) => ({
  ...state,
  ...dispatch,
  ...ownProps,
  showTodoDetails: (id: number) => ownProps.history.push(`/todos/${id}`),
  onAddTodo: () => ownProps.history.push(`/todo`)
});

export default connect(mapStateToProps, mapDispatchToProps ,merge)(Todos);