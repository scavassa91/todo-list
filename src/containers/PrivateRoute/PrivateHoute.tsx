import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

interface MyProps {
  path: string;
  component: Function;
  isLoged: boolean;
  exact: boolean;
}

class PrivateRoute extends Component<MyProps> {
  public render(): JSX.Element {
    const { component: Component, isLoged, ...rest } = this.props;

    const noAuth = (
      <Route {...rest} render={() => <Redirect to="/" />}/>);

    const authSuccess = (
      <Route exact={this.props.exact} {...rest} render={props => <Component {...props} />}/>);
    return isLoged ? authSuccess : noAuth;
  }
}

export default PrivateRoute;