import { connect } from 'react-redux';
import Gradient from '../components/Gradient';

export default connect(
    (state) => ({
        firstColor: state.firstColor,
        lastColor: state.lastColor,
        direction: state.direction,
    }),
    null,
)(Gradient);
