import React, { Component } from 'react';
import { Todo } from '../../interfaces/Todo';
import { Card, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import './Todos.css';
import TodoMenu from './components/TodoMenu';


interface MyProps {
  isLoading: boolean;
  todos: Todo[];
  getAllTodos: Function;
}
class Todos extends Component<MyProps> {

  componentDidMount() {
    const { getAllTodos } = this.props;
    getAllTodos();
  }

  renderTodoCard(): JSX.Element[] {
    const { todos } = this.props;
    return todos.sort((a, b) => b.urgency - a.urgency).map((todo: Todo) => {
      return (
        <Card
          key={todo.id} 
          className={'todo-card' + (todo.isCompleted ? ' done' : '')}>
          <div className="card-content">
            <Typography
              className="todo-title"
              variant="subtitle2">{todo.text}</Typography>
            <TodoMenu todo={todo} />
          </div>
        </Card>
      );
    });
  }

  render(): JSX.Element {
    console.log(this.props.todos);
    return (
      <div className="list-tasks">
        {this.renderTodoCard()}
      </div>
    );
  }
}

export default Todos;
