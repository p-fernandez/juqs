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

const createHash = (x, y) => `x${x}y${y}`;

const Map = () => {
  const ref = useRef();
  const coords = useMouseClick(ref);
  const { x, y } = coords;
/*
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: createHash(x, y), x, y })
  };
  useFetch('http://localhost:8080/api/points', options);
*/
  return (
    <MapContainer ref={ref}>
      <Pins />
    </MapContainer>
  );
};

export default Map;
