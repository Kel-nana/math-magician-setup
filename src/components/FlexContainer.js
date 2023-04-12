import React from 'react';
import PropTypes from 'prop-types';

export default function FlexContainer({ handleClick }) {
  return (
    <div className="flex-container">
      <button type="button" className="btn" onClick={() => handleClick('AC')}>AC</button>
      <button type="button" className="btn" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" className="btn" onClick={() => handleClick('%')}>%</button>
      <button className="operators btn" type="button" onClick={() => handleClick('÷')}>&divide;</button>
      <button type="button" className="btn" onClick={() => handleClick('7')}>7</button>
      <button type="button" className="btn" onClick={() => handleClick('8')}>8</button>
      <button type="button" className="btn" onClick={() => handleClick('9')}>9</button>
      <button className="operators btn" type="button" onClick={() => handleClick('x')}>x</button>
      <button type="button" className="btn" onClick={() => handleClick('4')}>4</button>
      <button type="button" className="btn" onClick={() => handleClick('5')}>5</button>
      <button type="button" className="btn" onClick={() => handleClick('6')}>6</button>
      <button className="operators btn" type="button" onClick={() => handleClick('-')}>-</button>
      <button type="button" className="btn" onClick={() => handleClick('1')}>1</button>
      <button type="button" className="btn" onClick={() => handleClick('2')}>2</button>
      <button type="button" className="btn" onClick={() => handleClick('3')}>3</button>
      <button className="operators btn" type="button" onClick={() => handleClick('+')}>+</button>
      <button className="zero" type="button" onClick={() => handleClick('0')}>0</button>
      <button type="button" className="btn" onClick={() => handleClick('.')}>.</button>
      <button className="operators equal btn" type="button" onClick={() => handleClick('=')}>=</button>
    </div>
  );
}

FlexContainer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
