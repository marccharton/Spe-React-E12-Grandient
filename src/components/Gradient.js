import React from 'react';
import PropTypes from 'prop-types';

const Gradient = ({direction, firstColor, lastColor}) => {
    const style = {
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
    };

    return <div id="gradient" style={style} />;
};

Gradient.propTypes = {
    direction: PropTypes.string.isRequired,
    firstColor: PropTypes.string.isRequired,
    lastColor: PropTypes.string.isRequired,
};

export default Gradient;
