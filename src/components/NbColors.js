import React from 'react';
import PropTypes from 'prop-types';

const NbColors = ({ nbColors }) => (
    <div id="nbColors">
        {nbColors} couleur(s) générée(s)
    </div>
);

NbColors.propTypes = {
    nbColors: PropTypes.number.isRequired,
};

export default NbColors;
