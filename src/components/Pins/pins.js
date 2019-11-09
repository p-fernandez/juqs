import React from 'react';
import {
  useSelector,
} from 'react-redux';

import Point from '../Point';

const Pins = (pins) => {
  const entries = [];
  if (pins.size > 0) {
    for (let [hash, { x, y }] of pins.entries()) {
       entries.push(<Point key={hash} x={x} y={y} />);
    }
  }

  return (
    <div>
      { entries }
    </div>
  );
};

export default Pins;
