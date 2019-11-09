import {
  useCallback,
} from 'react';

import {
  calculateCoordsInsideElement
} from './common-helpers';
import useEventListener from './use-event-listener';

const useMouseClick = (element, setCoords) => {
  const handler = useCallback(
    ({ clientX, clientY }) => {
      const { x, y } = calculateCoordsInsideElement(element, clientX, clientY);
      setCoords({ x, y });
    },
    [element, setCoords]
  );

  useEventListener('click', handler, element);
};

export default useMouseClick;
