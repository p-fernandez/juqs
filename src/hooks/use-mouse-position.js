import { useCallback, useState } from 'react';

import {
  calculateCoordsInsideElement
} from './common-helpers';
import useEventListener from './use-event-listener';

const useMousePosition = (element) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handler = useCallback(
    ({ clientX, clientY }) => {
      const { x, y } = calculateCoordsInsideElement(element, clientX, clientY);
      setCoords({ x, y });
    },
    [setCoords, element]
  );
 
  useEventListener('mousemove', handler, element);

  return coords;
};

export default useMousePosition;
