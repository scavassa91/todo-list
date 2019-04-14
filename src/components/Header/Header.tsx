import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import './Header.css';

class Header extends Component {
  render(): JSX.Element {
    return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className="grow">
          To Do App
        </Typography>
      </Toolbar>
    </AppBar>
    )
  }
}

export default Header;