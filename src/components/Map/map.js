import React, {
  useRef,
} from 'react';
import {
  useDispatch,
} from 'react-redux';
import styled from 'styled-components';

import Pins from '../Pins';
import useEffectOnlyOnUpdate from  '../../hooks/use-effect-only-on-update';
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

const useSetPoint = (x, y) => useDispatch({ type: 'SET', x, y });

const Map = ({ onUpdate }) => {
  const ref = useRef();
  const { x, y } = useMouseClick(ref.current);

  useEffectOnlyOnUpdate(useSetPoint(x, y), [useSetPoint, x, y]);

  return (
    <MapContainer ref={ref}>
      <Pins />
    </MapContainer>
  );
};

export default Map;
