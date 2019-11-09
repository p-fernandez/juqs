import React, {
  useEffect,
  useRef,
  useReducer,
  useState,
} from 'react';
import styled from 'styled-components';

import Pins from '../Pins';
import useMouseClick from '../../hooks/use-mouse-click';

const MapContainer = styled.div`
  background-color: green;
  height: 500px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 500px;
`;

const createHash = (x, y) => `x${x}y${y}`;

const pinsReducer = (state, action) => {
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

const Map = () => {
  const ref = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [pins, dispatch] = useReducer(pinsReducer, new Map());

  console.log(pins);

  useEffect(() => {
    dispatch({ TYPE: 'SET', coords });
  }, [coords]);
 
  useMouseClick(ref, setCoords);

  return (
    <MapContainer ref={ref}>
      <Pins pins={pins} />
    </MapContainer>
  );
};

export default Map;
