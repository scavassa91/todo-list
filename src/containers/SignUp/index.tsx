import { connect } from 'react-redux';
import { ReduxState } from '../../interfaces/ReduxState';
import { Dispatch } from 'redux';

import SignUp from './SignUp';

import { login } from '../Auth/AuthAction';

interface SignUpDispatchInterface {
  onSignUp: () => void;
}

interface SignupStateProps {
  isLoged: boolean;
  isLoading: boolean;
}

const mapStateToProps = (state: ReduxState) => ({
  isLoged: state.auth.isLoged,
  isLoading: state.auth.isLoginRunning,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSignUp: () => dispatch(login())
});

const merge = (state: SignupStateProps, dispatch: SignUpDispatchInterface, ownProps: any) => {
  return {
    ...state,
    ...dispatch,
    ...ownProps,
    onLoged: () => ownProps.history.push('/todos')
  }
};

export default connect(mapStateToProps, mapDispatchToProps, merge)(SignUp);