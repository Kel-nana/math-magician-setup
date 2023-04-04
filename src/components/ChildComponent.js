import React from 'react';

export default function ChildComponent() {
  return (
    <div className="flex-container">
      <button type="button" className="btn">AC</button>
      <button type="button" className="btn">+/-</button>
      <button type="button" className="btn">%</button>
      <button className="operators btn" type="button">÷</button>
      <button type="button" className="btn">7</button>
      <button type="button" className="btn">8</button>
      <button type="button" className="btn">9</button>
      <button className="operators btn" type="button">*</button>
      <button type="button" className="btn">4</button>
      <button type="button" className="btn">5</button>
      <button type="button" className="btn">6</button>
      <button className="operators btn" type="button">-</button>
      <button type="button" className="btn">1</button>
      <button type="button" className="btn">2</button>
      <button type="button" className="btn">3</button>
      <button className="operators btn" type="button">+</button>
      <button className="zero" type="button">0</button>
      <button type="button" className="btn">.</button>
      <button className="operators equal btn" type="button">=</button>
    </div>
  );
}
