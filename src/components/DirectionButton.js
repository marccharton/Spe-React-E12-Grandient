import React from 'react';
import PropTypes from 'prop-types';

const DirectionButton = ({ label, changeDirection, current }) => {
    const currentCss = current
        ? { background: '#6090DC', color: '#FFF' }
        : {};

    return (
        <button style={currentCss} type="button" className="button" onClick={changeDirection}>
            {label}
        </button>
    );
};

DirectionButton.propTypes = {
    label: PropTypes.string.isRequired,
    changeDirection: PropTypes.func.isRequired,
};

export default DirectionButton;
