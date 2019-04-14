import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import SignUp from './containers/SignUp';
import ListTasks from './containers/ListTasks/ListTasks';
import Header from './components/Header/Header';
import PrivateRoute from './containers/PrivateRoute';

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Route exact path="/" component={SignUp} />
          <PrivateRoute path="/todos" component={ListTasks} />
        </Router>
      </div>
    );
  }
}

export default App;
