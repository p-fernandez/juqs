import React, {
  useEffect,
  useRef,
  useState,
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

const url = 'http://localhost:8080/api/points'; 

const createHash = (x, y) => `x${x}y${y}`;

const Map = () => {
  const ref = useRef();

  const clickCoords = useMouseClick(ref);
  const [coords, setCoords] = useState({x: null, y: null});
  const [options, setOptions] = useState(null); 

  const [reqResponse, setReqResponse] = useState(null);
  const [reqError, setReqError] = useState(null);

  const { response, error } = useFetch(url, options);

  useEffect(() => {
    const { x, y } = clickCoords;
    setCoords({ x, y });
  }, [clickCoords]);

  useEffect(() => {
    const { x, y } = coords;
    if (x && y) {
      setOptions({
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: createHash(x, y), x, y })
      });
    }
  }, [coords]);

  useEffect(() => {
    setReqResponse(response);
    setReqError(error);
  }, [response, error]);

  return (
    <MapContainer ref={ref} image={map}>
      <ImageContainer alt='map' src={map} />
      <Pins />
    </MapContainer>
  );
};

export default Map;
