import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

interface MyProps {
  isLoged: boolean;
  onLogout: Function;
}
class ListTasks extends Component<MyProps> {

  render(): JSX.Element {
    const { onLogout } = this.props;
    return (
      <div className="list-tasks">
        ListTasks works
      </div>
    );
  }
}

export default ListTasks;
