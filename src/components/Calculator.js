import React from 'react';
import ChildComponent from './ChildComponent';

export default function Calculator() {
  return (

    <div className="calcBody">
      <div className="output">
        <div className="operand calcDisplay">
          222
        </div>
      </div>
      <ChildComponent />
    </div>
  );
}
