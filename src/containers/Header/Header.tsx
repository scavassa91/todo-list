import React, { Component } from 'react';
import { History }  from 'history';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Header.css';

interface MyState {
  anchorEl: any;
}
interface MyProps {
  isLoged: boolean;
  onLogout: Function;
  goHome: Function;
  history: History;
}

class Header extends Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  componentWillUpdate() {
    const { isLoged, goHome } = this.props;
    if (!isLoged) {
      goHome();
    }
  }

  handleClick(event: React.MouseEvent): void {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose(): void {
    this.setState({ anchorEl: null });
  }

  onLogoutClick(): void {
    this.handleClose();
    this.props.onLogout();
  }

  renderMenu(): JSX.Element {
    const { anchorEl } = this.state;
    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="More"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={
            (event: React.MouseEvent) => this.handleClick(event)
          }
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => this.handleClose()}
        >
          <MenuItem onClick={() => this.onLogoutClick()}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }

  render(): JSX.Element {
    console.log(this.props);
    const { isLoged } = this.props;
    return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          className={"grow" + (isLoged ? " space" : "")}>
          To Do App
        </Typography>
        {isLoged ? this.renderMenu() : null}
      </Toolbar>
    </AppBar>
    )
  }
}

export default Header;