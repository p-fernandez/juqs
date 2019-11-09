import React from 'react';
import {
  useSelector,
} from 'react-redux';

import Point from '../Point';

const paintPins = (pins) => {
  const entries = [];
  for (const [hash, { x, y }] of pins.entries()) {
    entries.push(<Point key={hash} x={x} y={y} />);
  }
  return entries;
}

const Pins = () => {
  const pins = useSelector(state => state.pins);

  return pins.size > 0 && paintPins(pins);
};

export default Pins;
