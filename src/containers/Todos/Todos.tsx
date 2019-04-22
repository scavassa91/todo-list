import React, { Component } from 'react';
import { Todo } from '../../interfaces/Todo';
import { Card, Typography, Fab, Snackbar, Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import './Todos.css';
import TodoMenu from './components/TodoMenu';
import Spinner from '../../components/Spinner/Spinner';


interface MyProps {
  isLoading: boolean;
  todos: Todo[];
  getAllTodos: Function;
  showTodoDetails: Function;
  onAddTodo: Function;
  deleteTodo: Function;
  deleteStatus: number;
  saveEditStatus: number;
  getStatus: number;
  cleanMessage: Function;
}
interface MyState {
  snackOpen: boolean;
  message: string;
}
class Todos extends Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);

    this.state = {
      snackOpen: false,
      message: '',
    };
  }

  public componentDidMount() {
    const { getAllTodos, cleanMessage } = this.props;
    getAllTodos();
    cleanMessage();
  }

  public componentWillUpdate() {
    const {
      deleteStatus,
      saveEditStatus,
      getStatus,
      cleanMessage,
    } = this.props;
    let message: string = '';
    if (deleteStatus !== 0 || saveEditStatus !== 0 || getStatus >= 300) {
      if (deleteStatus >= 200 && deleteStatus < 300) {
        message = 'Todo successfully deleted';
      } else if (deleteStatus >= 300) {
        message = 'Error while deleting a todo';
      } else if (saveEditStatus >= 200 && saveEditStatus < 300) {
        message = 'Todo successfully saved';
      } else if (getStatus >= 300) {
        message = 'Error while fetching todos';
      }

      this.setState({
        snackOpen: true,
        message
      });

      cleanMessage();
    }
  }

  private renderTodoCard(): JSX.Element[] {
    const { todos, showTodoDetails, deleteTodo, getAllTodos } = this.props;
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
              onDetails={() => showTodoDetails(todo.id)}
              onDelete={() => deleteTodo(todo.id)} />
          </div>
        </Card>
      );
    });
  }

  private handleSnack() {
    const { cleanMessage } = this.props;
    cleanMessage();
    this.setState({
      snackOpen: !this.state.snackOpen
    });
  }

  private renderSnack(): JSX.Element {
    return (
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackOpen}
          autoHideDuration={6000}
          onClose={() => this.handleSnack()}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleSnack()}
            >
              <CloseIcon />
            </IconButton>
          } 
        />
    );
  }

  public render(): JSX.Element {
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
        {this.renderSnack()}
      </div>
    );
  }
}

export default Todos;
