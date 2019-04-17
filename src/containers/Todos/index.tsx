import { connect } from 'react-redux';
import Todos from './Todos';
import { listTodosFlow } from '../Todos/redux/TodosActions';
import { ReduxState } from '../../interfaces/ReduxState';

const mapStateToProps = (state: ReduxState) => ({
  isLoading: state.todos.isRunning,
  todos: Object.values(state.todos.todos)
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllTodos: () => dispatch(listTodosFlow())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);