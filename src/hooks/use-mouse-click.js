import { useCallback } from 'react';

import {
  calculateCoordsInsideElement
} from './common-helpers';
import useEventListener from './use-event-listener';

const useMouseClick = (element) => {
  const handler = useCallback(
    ({ clientX, clientY }) => {
      const { x, y } = calculateCoordsInsideElement(element, clientX, clientY);
      alert(`${x}, ${y}`);
    },
    [element]
  );

  useEventListener('click', handler, element);
};

export default useMouseClick;
