import { useCallback } from 'react';

import {
  calculateCoordsInsideElement
} from './common-helpers';
import useEventListener from './use-event-listener';

const PREVENT_DEFAULT = true;

const useMouseRightClick = (element) => {
  const handler = useCallback(
    (e) => {
      e.preventDefault();
      const { x, y } = calculateCoordsInsideElement(element, e.clientX, e.clientY);
      alert(`This is a right click at ${x}, ${y}`);
    },
    [element]
  );

  useEventListener('contextmenu', handler, element, PREVENT_DEFAULT);
};

export default useMouseRightClick;
