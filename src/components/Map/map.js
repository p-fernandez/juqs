import React, {
  useEffect,
  useRef,
} from 'react';
import {
  useDispatch,
} from 'react-redux';
import styled from 'styled-components';

import Pins from '../Pins';
import useMouseClick from '../../hooks/use-mouse-click';
import useMousePosition from '../../hooks/use-mouse-position';

const MapContainer = styled.div`
  background-color: green;
  height: 500px;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 500px;
`;

const Map = ({ onUpdate }) => {
  const ref = useRef();
  const coords = useMousePosition(ref.current);
  const clickCoords = useMouseClick(ref.current);

  const dispatch = useDispatch();

  useEffect(() => onUpdate(coords), [onUpdate, coords]);

  useEffect(() => {
    const { x, y } = clickCoords;
    dispatch({ type: 'SET', x, y });
  }, [clickCoords, dispatch]);

  return (
    <MapContainer ref={ref}>
      <Pins />
    </MapContainer>
  );
};

export default Map;
