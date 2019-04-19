import React, { Component } from 'react';
import { Todo } from '../../interfaces/Todo';
import { Card, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Todos.css';
import TodoMenu from './components/TodoMenu';
import Spinner from '../../components/Spinner/Spinner';


interface MyProps {
  isLoading: boolean;
  todos: Todo[];
  getAllTodos: Function;
  showTodoDetails: Function;
  onAddTodo: Function;
}
class Todos extends Component<MyProps> {

  componentDidMount() {
    const { getAllTodos } = this.props;
    getAllTodos();
  }

  renderTodoCard(): JSX.Element[] {
    const { todos, showTodoDetails } = this.props;
    return todos.sort((a, b) => b.urgency - a.urgency).map((todo: Todo) => {
      return (
        <Card
          key={todo.id} 
          className={'todo-card' + (todo.isCompleted ? ' done' : '')}>
          <div className="card-content">
            <Typography
              className="todo-title"
              variant="subtitle2">{todo.text}</Typography>
            <TodoMenu
              todo={todo}
              onDetails={() => showTodoDetails(todo.id)} />
          </div>
        </Card>
      );
    });
  }

  render(): JSX.Element {
    const { isLoading, onAddTodo } = this.props;
    return (
      <div className="list-tasks">
        <Spinner isHide={!isLoading} />
        {this.renderTodoCard()}
        <Fab
          onClick={() => onAddTodo()}
          className="add-icon"
          color="primary"
          aria-label="Add">
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default Todos;
