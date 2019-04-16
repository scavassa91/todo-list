import React, { Component } from 'react';

interface MyProps {
  isLoged: boolean;
}
class ListTasks extends Component<MyProps> {

  render(): JSX.Element {
    return (
      <div className="list-tasks">
        ListTasks works
      </div>
    );
  }
}

export default ListTasks;
