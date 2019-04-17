import React, { Component } from 'react';
import './SignUp.css';
import { Button } from '@material-ui/core';
import Spinner from '../../components/Spinner/Spinner';

interface MyProps {
  isLoged: boolean;
  isLoading: boolean;
  onSignUp: Function;
  onLoged: Function;
};

class SignUp extends Component<MyProps> {
  componentWillUpdate() {
    const { isLoged, onLoged } = this.props;
    if (isLoged) {
      onLoged();
    }
  }

  public render(): JSX.Element {
    const { onSignUp, isLoading } = this.props;
    return (
      <div className="sign-up">
        <Button
          onClick={() => onSignUp()}
          variant="contained"
          color="primary">Sign Up
        </Button>
        <Spinner isHide={!isLoading} />
      </div>
    );
  }
}

export default SignUp;