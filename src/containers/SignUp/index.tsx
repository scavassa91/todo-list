import { connect } from 'react-redux';
import { ReduxState } from '../../interfaces/ReduxState';

import SignUp from './SignUp';

import { login } from '../Auth/AuthAction';

const mapStateToProps = (state: ReduxState) => ({
  isLoged: state.auth.isLoged,
  isLoading: state.auth.isLoginRunning,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSignUp: () => dispatch(login())
});

const merge = (state: any, dispatch: any, ownProps: any) => ({
  ...state,
  ...dispatch,
  ...ownProps,
  onLoged: () => ownProps.history.push('/todos')
});

export default connect(mapStateToProps, mapDispatchToProps, merge)(SignUp);