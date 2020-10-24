import { connect } from 'react-redux';
import Colors from '../components/Colors';

const mapStateToProps = (state) => ({
    firstColor: state.firstColor,
    lastColor: state.lastColor,
    direction: state.direction,
});

const mapDispatchToProps = null;

const ColorsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Colors);

export default ColorsContainer;
