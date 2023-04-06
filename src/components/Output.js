import React from 'react';
import PropTypes from 'prop-types';

export default function Output({ displayValue }) {
  return (
    <div className="output">
      <div className="operand calcDisplay">
        {displayValue}
      </div>
    </div>
  );
}

Output.propTypes = {
  displayValue: PropTypes.string.isRequired,
};
