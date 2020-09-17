import { connect } from 'react-redux';

import NbColors from 'src/components/NbColors';

const mapStateToProps = (state) => ({
    nbColors: state.nbColors,
});

const mapDispatchToProps = null;

const NbColorsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NbColors);

export default NbColorsContainer;
