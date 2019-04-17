import { connect } from 'react-redux';
import { ReduxState } from '../../interfaces/ReduxState';
import { logout } from '../Auth/AuthAction';
import Header from './Header';
import { Dispatch } from 'redux';

interface HeaderDispatchInterface {
  onLogout: () => void;
}

interface HeaderStateProps {
  isLoged: boolean;
}

const mapStateToProps = (state: ReduxState): HeaderStateProps => ({
  isLoged: state.auth.isLoged,
});

const mapDispatchToProps = (dispatch: Dispatch): HeaderDispatchInterface => ({
  onLogout: () => dispatch(logout())
});

const merge = (
  state: HeaderStateProps,
  dispatch: HeaderDispatchInterface,
  ownProps: any) => {
  return {
    ...state,
    ...dispatch,
    ...ownProps,
    goHome: () => ownProps.history.push('/')
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps, merge
)(Header);