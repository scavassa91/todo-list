import { connect } from 'react-redux';
import TodoDetails from './TodoDetails';
import { ReduxState } from '../../interfaces/ReduxState';
import { Todo, ITodo } from '../../interfaces/Todo';
import { saveTodoFlow, editTodoFlow, saveTodoClean, editTodoClean } from './redux/TodoActions';
import { Dispatch } from 'redux';

interface TodosDetailsStateProps {
  isLoading: boolean;
  status: number;
  todos: ITodo<Todo>;
}

interface TodosDetailsDispatchProps {
  _onSave: (todo: Todo) => void;
  _onEdit: (id: number, todo: Todo) => void;
  clearStatus: () => void;
}

const mapStateToProps = (state: ReduxState): TodosDetailsStateProps => ({
  isLoading: state.todo.isRunning,
  status: state.todo.status,
  todos: state.todos.todos
});

const mapDispatchToProps = (dispatch: Dispatch): TodosDetailsDispatchProps => ({
  _onSave: (todo: Todo) => dispatch(saveTodoFlow(todo)),
  _onEdit: (id: number, todo: Todo) => dispatch(editTodoFlow(id, todo)),
  clearStatus: () => {
    dispatch(saveTodoClean()),
    dispatch(editTodoClean())
  }
});

const merge = (
  state: TodosDetailsStateProps,
  dispatch: TodosDetailsDispatchProps,
  ownProps: any
) => {
  const id = ownProps.match.params.id;
  const todo = state.todos[id];
  return {
    ...state,
    ...dispatch,
    ...ownProps,
    todo,
    onCancel: () => ownProps.history.push(`/todos`),
    onSave: id ? (todo: Todo) => dispatch._onEdit(id, todo)
      : (todo: Todo) => dispatch._onSave(todo)
  };
};

export default connect(mapStateToProps, mapDispatchToProps, merge)(TodoDetails);