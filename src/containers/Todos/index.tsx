import { connect } from 'react-redux';
import Todos from './Todos';
import { ReduxState } from '../../interfaces/ReduxState';
import { Dispatch } from 'redux';
import { Todo } from '../../interfaces/Todo';
import {
  deleteTodoFlow,
  getTodosFlow,
  saveTodoClean,
  editTodoClean,
  deleteTodoClean,
  getTodosClean
} from '../TodoDetails/redux/TodoActions';

interface TodosDispatchInterface {
  getAllTodos: () => void;
  deleteTodo: (id: string) => void;
  cleanMessage: () => void;
}

interface TodosStateProps {
  isLoading: boolean;
  todos: Todo[];
  deleteStatus: number;
  saveEditStatus: number;
  getStatus: number;
}

const mapStateToProps = (state: ReduxState): TodosStateProps => ({
  isLoading: state.todos.isRunning,
  todos: Object.values(state.todos.todos),
  deleteStatus: state.todos.deleteStatus,
  saveEditStatus: state.todos.saveEditstatus,
  getStatus: state.todos.getStatus,
});

const mapDispatchToProps = (dispatch: Dispatch): TodosDispatchInterface => ({
  getAllTodos: () => dispatch(getTodosFlow()),
  deleteTodo: (id: string) => dispatch(deleteTodoFlow(id)),
  cleanMessage: () => {
    dispatch(getTodosClean());
    dispatch(saveTodoClean());
    dispatch(editTodoClean());
    dispatch(deleteTodoClean());
  }
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