import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from './logic/calculate';
import Output from './Output';
import FlexContainer from './FlexContainer';

export default function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const displayValue = calculatorData.next || calculatorData.total || '0';

  return (
    <div className="calcBody">
      <Output displayValue={displayValue} />
      <FlexContainer handleClick={handleClick} />
    </div>
  );
}

Output.propTypes = {
  displayValue: PropTypes.string.isRequired,
};
