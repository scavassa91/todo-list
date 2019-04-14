import { connect } from 'react-redux';
import PrivateRoute from './PrivateHoute';
import { ReduxState } from '../../interfaces/ReduxState';

const mapStateToProps = (state: ReduxState) => ({
  isLoged: state.auth.isLoged,
});

export default connect(mapStateToProps)(PrivateRoute);