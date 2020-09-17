import { connect } from 'react-redux';
import RandomButtons from 'src/components/RandomButtons';
import { randomFirstColor, randomLastColor, incrementColors } from 'src/actions/gradient';

const mapDispatchToProps = (dispatch) => ({
    randomFirst: () => {
        dispatch(randomFirstColor());
        dispatch(incrementColors());
    },
    randomLast: () => {
        dispatch(randomLastColor());
        dispatch(incrementColors());
    },
    randomAll: () => {
        dispatch(randomFirstColor());
        dispatch(randomLastColor());
        dispatch(incrementColors());
    },
});

export default connect(null, mapDispatchToProps)(RandomButtons);
