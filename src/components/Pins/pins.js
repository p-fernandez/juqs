import React, {
  useEffect,
  useState,
} from 'react';

import {
  ErrorScreen,
  Loading,
  Point,
} from 'components';
import useFetch from 'hooks/use-fetch';
import apiResponseAdapter from 'interfaces/adapters/api-response-adapter';

const url = 'http://localhost:8080/api/points';

const Pins = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    response: fetchResponse,
    error: fetchError,
    isLoading: fetchIsLoading,
  } = useFetch(url);

  useEffect(() => {
    setResponse(fetchResponse);
    setError(fetchError);
    setIsLoading(fetchIsLoading);
  }, [fetchResponse, fetchError, fetchIsLoading]);

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
