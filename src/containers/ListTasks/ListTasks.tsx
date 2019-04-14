import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Header from '../../components/Header/Header';

class ListTasks extends Component {
  render(): JSX.Element {
    return (
      <div className="list-tasks">
        <Button variant="contained" color="primary">Test</Button>
      </div>
    );
  }
}

export default ListTasks;
