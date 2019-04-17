import React, { Fragment, Component } from 'react';
import { Todo } from '../../../interfaces/Todo';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

interface MyState {
  anchorEl: any;
}
interface MyProps {
  todo: Todo;
}

export default class TodoMenu extends Component <MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleClick(event: React.MouseEvent): void {
    this.setState({ anchorEl: event.currentTarget });
  }
  
  handleClose(): void {
    this.setState({ anchorEl: null });
  }

  render(): JSX.Element {
    const { anchorEl } = this.state;
    const { todo } = this.props;
    return (
      <Fragment>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? `simple-menu-${todo.id}` : undefined}
          aria-haspopup="true"
          onClick={
          (event: React.MouseEvent) => this.handleClick(event)}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id={`simple-menu-${todo.id}`}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.handleClose()}
        >
          <MenuItem>{todo.isCompleted ? 'Uncompleted' : 'Compled'}</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </Fragment>
    );
  }
}
