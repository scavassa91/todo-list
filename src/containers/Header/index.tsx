import { connect } from 'react-redux';
import { ReduxState } from '../../interfaces/ReduxState';
import { logout } from '../Auth/AuthAction';
import Header from './Header';

const mapStateToProps = (state: ReduxState) => ({
  isLoged: state.auth.isLoged,
});

const mapDispatchToProps = (dispatch: any) => ({
  onLogout: () => dispatch(logout())
});

const merge = (state: any, dispatch: any, ownProps: any) => {
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