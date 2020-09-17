/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const RandomButtons = ({randomFirst, randomLast, randomAll}) => (
    <div className="buttons group">
        <button className="button" id="randFirst" onClick={randomFirst}>Random First</button>
        <button className="button" id="randAll" onClick={randomAll}>Random All</button>
        <button className="button" id="randLast" onClick={randomLast}>Random Last</button>
    </div>
);

RandomButtons.propTypes = {
    randomFirst: PropTypes.func.isRequired,
    randomLast: PropTypes.func.isRequired,
    randomAll: PropTypes.func.isRequired,
};

export default RandomButtons;
