import React from 'react';

import {
  ErrorScreen,
  Loading,
  Point,
} from 'components';
import useFetch from 'hooks/use-fetch';
import apiResponseAdapter from 'interfaces/adapters/api-response-adapter';

const Pins = () => {
  const url = 'http://localhost:8080/api/points';
  const {
    response,
    error,
    isLoading,
  } = useFetch(url);

  if (isLoading) {
    return (
      <Loading />
    );
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
