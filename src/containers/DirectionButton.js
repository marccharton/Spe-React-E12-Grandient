import { connect } from 'react-redux';
import DirectionButton from '../components/DirectionButton';
import { changeDirection } from '../actions/gradient';

export default connect(
    (state, ownProps) => ({
        current: state.direction === ownProps.direction,
    }),
    (dispatch, ownProps) => ({
        changeDirection: () => {
            dispatch(changeDirection(ownProps.direction));
        },
    }),
)(DirectionButton);
