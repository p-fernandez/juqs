import {
  useCallback,
  useState,
} from 'react';

import {
  calculateCoordsInsideElement
} from './common-helpers';
import useEventListener from './use-event-listener';

const useMouseClick = (element) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handler = useCallback(
    ({ clientX, clientY }) => {
      const coords = calculateCoordsInsideElement(element, clientX, clientY);
      setCoords(state => ({ ...state, ...coords }));
    },
    [element, setCoords]
  );

  useEventListener('click', handler, element);

  return coords;
};

export default useMouseClick;
