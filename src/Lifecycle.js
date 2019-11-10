import React, {
  useEffect,
  useRef
} from 'react';

import useFetch from 'hooks/use-fetch';
import useComponentIsMounted from 'hooks/use-component-is-mounted';

const createHash = (x, y) => `x${x}y${y}`;

const Lifecycle = () => {
  const isMounted = useComponentIsMounted();
  console.log(isMounted);
  const x = 0
  const y = 0
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: createHash(x, y), x, y })
  };
  useFetch('http://localhost:8080/api/points', [options, x, y]);

  console.log('render');
  return (
    'Lifecycle'
  );
};

export default Lifecycle;
