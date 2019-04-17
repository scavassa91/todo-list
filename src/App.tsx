import React, { Component } from 'react';
import { createBrowserHistory, History }  from 'history';
import { Router, Route } from 'react-router-dom';
import './App.css';
import SignUp from './containers/SignUp';
import Todos from './containers/Todos';
import Header from './containers/Header';
import PrivateRoute from './containers/PrivateRoute';

const history: History = createBrowserHistory();

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Header history={history}/>
        <Router history={history}>
          <Route exact path="/" component={SignUp} />
          <PrivateRoute path="/todos" component={Todos} />
        </Router>
      </div>
    );
  }
}

export default App;
