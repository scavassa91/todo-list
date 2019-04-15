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
        <Button
          onClick={() => onLogout()}
          variant="contained"
          color="primary">Logout
        </Button>
      </div>
    );
  }
}

export default ListTasks;
