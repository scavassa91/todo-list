import React, { Component } from 'react';
import { Todo } from '../../interfaces/Todo';
import './TodoDetails.css';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@material-ui/core';
import Spinner from '../../components/Spinner/Spinner';

interface MyProps {
  todo?: Todo;
  onCancel: Function;
  onSave: Function;
  isLoading: boolean;
  status: number;
  clearStatus: Function;
}

interface MyState {
  todoText: string;
  urgencyText: number;
  isDone: string;
}

class TodoDetails extends Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);

    this.state = {
      todoText: '',
      urgencyText: 1,
      isDone: 'todo'
    };
  }

  componentWillUnmount() {
    const { clearStatus } = this.props;
    clearStatus();
  }

  componentWillUpdate() {
    const { status, onCancel } = this.props;
    if (status >= 200 && status < 300) {
      onCancel();
    } else if (status >= 300) {
      onCancel();
    }
  }

  componentWillMount() {
    const { todo } = this.props;
    if (todo) {
      this.setState({
        todoText: todo.text,
        urgencyText: todo.urgency,
        isDone: todo.isCompleted ? 'done' : 'todo'
      });
    }
  }

  onRadioChange(value: string) {
    this.setState({ isDone: value });
  }

  private renderRadioButton(): JSX.Element {
    return (
      <FormControl className="radio-control">
        <FormLabel>Is completed:</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          value={this.state.isDone}
          onChange={
            (event: React.ChangeEvent<{}>,
              value: string) => this.onRadioChange(value)}>
          <FormControlLabel
            value="todo"
            control={<Radio color="primary" />}
            label="Todo" />
          <FormControlLabel
            value="done"
            control={<Radio color="primary" />}
            label="Done" />
        </RadioGroup>
      </FormControl>
    );
  }

  private onFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    const { onSave } = this.props;
    event.preventDefault();
    const todo: Todo = {
      text: this.state.todoText,
      urgency: this.state.urgencyText,
      isCompleted: this.state.isDone === 'done' ? true : false
    };
    onSave(todo);
  }

  onTodoTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ todoText: event.target.value });
  }

  onTodoUrgencyChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ urgencyText: parseInt(event.target.value, 10) });
  }

  public render(): JSX.Element {
    const { todoText, urgencyText } = this.state;
    const { onCancel, isLoading } = this.props;
    return (
      <div className="todo-details">
        <Spinner isHide={!isLoading} />
        <form onSubmit={
          (event: React.FormEvent<HTMLFormElement>) =>
            this.onFormSubmit(event)}>
          <TextField
            className="field"
            required
            fullWidth
            id="todo-text"
            label="Todo"
            onChange={
              (event: React.ChangeEvent<HTMLInputElement>) =>
                this.onTodoTextChange(event)
            }
            defaultValue={todoText}
          />
          <TextField
            className="field"
            required
            id="urgency-text"
            label="Urgency"
            type="number"
            onChange={
              (event: React.ChangeEvent<HTMLInputElement>) =>
                this.onTodoUrgencyChange(event)
            }
            defaultValue={urgencyText.toString()}
          />
          {this.renderRadioButton()}
          <div className="button-control">
          <Button
            type="submit"
            variant="contained"
            color="primary">Save</Button>
          <Button
            onClick={() => onCancel()}
            variant="contained"
            color="secondary">Cancel</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoDetails;
