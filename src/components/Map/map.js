import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  background-color: red;
  height: 500px;
  margin: 0;
  padding: 0;
  width: 500px;
`;

const Map = ({ mapRef }) => (
  <MapContainer ref={mapRef} />
);

export default Map;
