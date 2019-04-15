import { connect } from 'react-redux';
import ListTasks from './ListTasks';
import { logout } from '../Auth/AuthAction';
import { ReduxState } from '../../interfaces/ReduxState';

const mapStateToProps = (state: ReduxState) => ({
  isLoged: state.auth.isLoged,
});

const mapDispatchToProps = (dispatch: any) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);