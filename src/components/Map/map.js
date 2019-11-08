import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useMouseClick from '../../hooks/use-mouse-click';
import useMousePosition from '../../hooks/use-mouse-position';
import useMouseRightClick from '../../hooks/use-mouse-right-click';

const MapContainer = styled.div`
  background-color: red;
  height: 500px;
  margin: 0;
  padding: 0;
  width: 500px;
`;

const Map = ({ onUpdate }) => {
  const ref = useRef();
  const coords = useMousePosition(ref.current);
  useMouseClick(ref.current);
  useMouseRightClick(ref.current);

  useEffect(() => onUpdate(coords), [onUpdate, coords]);

  return (
    <MapContainer ref={ref} />
  );
};

export default Map;
