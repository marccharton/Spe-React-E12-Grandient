import { connect } from 'react-redux';
import DirectionButton from '../components/DirectionButton';
import { changeDirection } from '../actions/gradient';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    changeDirection: (direction) => {
        console.log(direction);
        dispatch(changeDirection(direction));
    },
});

const DirectionButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DirectionButton);

export default DirectionButtonContainer;
