import React from 'react';
import PropTypes from 'prop-types';

const DirectionButton = ({ label, direction, changeDirection }) => (
    <button type="button" className="button" onClick={() => changeDirection(direction)}>
        {label}
    </button>
);

DirectionButton.propTypes = {
    label: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    changeDirection: PropTypes.func.isRequired,
};

export default DirectionButton;
