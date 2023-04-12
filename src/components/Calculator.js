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

  const styles = {
    calcHeading: {
      marginTop: '11.7%',
      marginLeft: '10%',
      padding: '20px',
      border: '1px solid rgb(173, 154, 154)',
      fontSize: '2.7rem',
      width: '30%',
      fontFamily: '"Delicious Handrawn", Arial, Helvetica, sans-serif',
      boxShadow:
        'rgba(93, 50, 67, 0.25) 0 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0 18px 36px -18px inset',
      textAlign: 'center',
      backgroundColor: '#868c91',
      color: 'rgb(241, 238, 232)',
      borderRadius: '20px',
    },
  };

  return (
    <div className="calc-page">
      <h2 style={styles.calcHeading}>Lets Do Some Math!</h2>
      <div className="calcBody">
        <Output displayValue={displayValue} />
        <FlexContainer handleClick={handleClick} />
      </div>
    </div>
  );
}

Output.propTypes = {
  displayValue: PropTypes.string.isRequired,
};
