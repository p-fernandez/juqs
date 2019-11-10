import React, {
  useRef,
} from 'react';
import styled from 'styled-components';

import Pins from 'components/Pins';
import useFetch from 'hooks/use-fetch';
import useMouseClick from 'hooks/use-mouse-click';

import map from './map.png';

const MapContainer = styled.div`
  background: no-repeat url('.${props => props.image}') 50% / 100%;
  position: relative;
`;

const ImageContainer = styled.img`
  vertical-align: top;
  width: 100%;
  opacity: 0;
`;

const createHash = (x, y) => `x${x}y${y}`;

const Map = () => {
  const ref = useRef();
  const coords = useMouseClick(ref);
  const { x, y } = coords;
  /*
  const [{ response, isLoading, error }, setOptions, setUrl] = useFetch();
  
  setOptions({
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: createHash(x, y), x, y })
  });
  setUrl('http://localhost:8080/api/points');
  */
  return (
    <MapContainer ref={ref} image={map}>
      <ImageContainer alt='map' src={map} />
      <Pins />
    </MapContainer>
  );
};

export default Map;
