import React from 'react';
import PropTypes from 'prop-types';

const Colors = ({ direction, firstColor, lastColor }) => {
    const firstStyle = { color: firstColor };
    const lastStyle = { color: lastColor };

    const firstSpan = (<span style={firstStyle} key="first">{firstColor}</span>);
    const lastSpan = (<span style={lastStyle} key="last">{lastColor}</span>);

    return (
        <div className="colors" id="colors">
            {
                ['45deg', '90deg', '135deg'].includes(direction)
                    ? [firstSpan, '->', lastSpan]
                    : [lastSpan, '<-', firstSpan]
            }
        </div>
    );
};

Colors.propTypes = {
    direction: PropTypes.string.isRequired,
    firstColor: PropTypes.string.isRequired,
    lastColor: PropTypes.string.isRequired,
};

export default Colors;
