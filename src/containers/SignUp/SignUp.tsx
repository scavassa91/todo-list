import React, { Component } from 'react';
import './SignUp.css';
import { Button } from '@material-ui/core';
import { Auth } from '../../interfaces/Auth';

interface MyProps {
  auth: Auth;
  onSignUp: Function;
};

class SignUp extends Component<MyProps> {
  render(): JSX.Element {
    const { onSignUp } = this.props;
    console.log(this.props);
    return (
      <div className="sign-up">
        <Button
          onClick={() => onSignUp()}
          variant="contained"
          color="primary">Sign Up</Button>
      </div>
    );
  }
}

export default SignUp;