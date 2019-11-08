import React, { useState } from 'react';
import styled from 'styled-components';

import {
  Map,
  PositionBoard
} from './components';

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const App = () => {
  const [coords, onUpdate] = useState({ x: 0, y: 0 });

  return (
    <AppContainer className="appContainer">
      <PositionBoard coords={coords} />
      <Map onUpdate={onUpdate} />
    </AppContainer>
  );
}

export default App;
