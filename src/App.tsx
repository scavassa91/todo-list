import React, { Component } from 'react';
import { createBrowserHistory, History }  from 'history';
import { Router, Route } from 'react-router-dom';
import './App.css';
import SignUp from './containers/SignUp';
import Todos from './containers/Todos';
import Header from './containers/Header';
import PrivateRoute from './containers/PrivateRoute';
import TodoDetails from './containers/TodoDetails';

const history: History = createBrowserHistory();

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Header history={history} />
        <Router history={history}>
          <Route exact path="/" component={SignUp} />
          <PrivateRoute exact={true} path="/todos" component={Todos} />
          <PrivateRoute exact={true} path="/todos/:id" component={TodoDetails} />
          <PrivateRoute exact={true} path="/todo" component={TodoDetails} />
        </Router>
      </div>
    );
  }
}

export default App;
