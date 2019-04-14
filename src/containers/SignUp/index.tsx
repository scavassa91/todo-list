import { connect } from 'react-redux';
import { ReduxState } from '../../interfaces/ReduxState';

import SignUp from './SignUp';

import { login } from '../Auth/AuthAction';

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSignUp: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);