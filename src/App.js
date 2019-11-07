import React,{ useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

import {
  Map,
  PositionBoard
} from './components';
import useEventListener from './hooks/use-event-listener';

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const App = () => {
  const mapRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      console.log(clientX, clientY)
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );
  
  // Add event listener using our hook
  useEventListener('mousemove', handler, mapRef);

  return (
    <AppContainer className="appContainer">
      <PositionBoard coords={coords} />
      <Map mapRef={mapRef} />
    </AppContainer>
  );
}

export default App;
