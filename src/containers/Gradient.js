import { connect } from 'react-redux';
import Gradient from '../components/Gradient';

const mapStateToProps = (state) => ({
    firstColor: state.firstColor,
    lastColor: state.lastColor,
    direction: state.direction,
});
const mapDispatchToProps = null;

const GradientContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Gradient);

export default GradientContainer;
