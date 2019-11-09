import React, {
  useRef,
} from 'react';
import styled from 'styled-components';

import Pins from '../Pins';
import useFetch from '../../hooks/use-fetch';
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

const Map = () => {
  const ref = useRef();
  const coords = useMouseClick(ref);
  useFetch('http://localhost:3000/api/point', {});

  return (
    <MapContainer ref={ref}>
      <Pins />
    </MapContainer>
  );
};

export default Map;
