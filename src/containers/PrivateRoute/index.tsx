import { connect } from 'react-redux';
import PrivateRoute from './PrivateHoute';
import { ReduxState } from '../../interfaces/ReduxState';

interface PrivateRouterStateProps {
  isLoged: boolean;
}

const mapStateToProps = (state: ReduxState): PrivateRouterStateProps => ({
  isLoged: state.auth.isLoged,
});

export default connect(mapStateToProps)(PrivateRoute);