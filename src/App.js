import React from 'react';
import styled from 'styled-components';

import {
  Map,
} from 'components';
import Lifecycle from './Lifecycle';
const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const App = () => {
  return (
    <AppContainer className="appContainer">
      <Lifecycle />
      <Map />
    </AppContainer>
  );
}

export default App;
