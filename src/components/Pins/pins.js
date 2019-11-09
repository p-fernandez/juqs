import React, {
  useCallback,
  useEffect,
  useRef,
  useReducer,
  useState,
} from 'react';


import Point from '../Point';

const createHash = (x, y) => `x${x}y${y}`;

const pinsReducer = (state = { pins: new Map() }, action) => {
  const { pins } = state;
  const { coords: { x, y } = {}} = action || {};
  const hash = createHash(x, y);

  switch (action.type) {
    case 'SET':
      pins.set(hash, { x, y });

      return {
        ...state,
        pins,
      };
    case 'DELETE':
      pins.delete(hash);

      return {
        ...state,
        pins,
      };
    default:
      return state;
  }
};

const Pins = (coords) => {
  const [pins, dispatch] = useReducer(pinsReducer);
  dispatch({ type: 'SET', coords });

  const entries = [];

  if (pins && pins.size > 0) {
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
