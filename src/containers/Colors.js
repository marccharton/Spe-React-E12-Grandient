import { connect } from 'react-redux';
import Colors from '../components/Colors';

export default connect(
    (state) => ({
        firstColor: state.firstColor,
        lastColor: state.lastColor,
        direction: state.direction,
    }),
    null,
)(Colors);
