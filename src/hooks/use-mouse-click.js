import {
  useCallback,
  useState,
} from 'react';

import {
  calculateCoordsInsideElement
} from './common-helpers';
import useEventListener from './use-event-listener';

const useMouseClick = (element) => {
  console.log(element);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handler = useCallback(
    ({ event, clientX, clientY }) => {
      const { x, y } = calculateCoordsInsideElement(element, clientX, clientY);
      setCoords({ x, y });
    },
    [element, setCoords]
  );

  useEventListener('click', handler, element);

  return coords;
};

export default useMouseClick;
