import React from 'react';

import ErrorScreen from '../ErrorScreen';
import Point from '../Point';
import useFetch from '../../hooks/use-fetch';
import apiResponseAdapter from '../../interfaces/adapters/api-response-adapter';

const Pins = () => {
  const {
    error,
    isLoading,
    response,
  } = useFetch('http://localhost:8080/api/points');

  if (isLoading) {
    return 'Loading !!';
  }

  if (error) {
    return (
      <ErrorScreen error={error} />
    );
  }

  const pins = (response && apiResponseAdapter(response)) || [];

  return pins && pins.length > 0
    && pins.map(({ id, x, y }) => (<Point key={id} x={x} y={y} />));
};

export default Pins;
