import React from 'react';
import PropTypes from 'prop-types';

const NbColors = ({ nbColors, message }) => (
    <div id="nbColors">
        {nbColors} couleur(s) générée(s) -- {message}
    </div>
);

NbColors.propTypes = {
    nbColors: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
};

export default NbColors;
