import {
  useCallback,
  useState,
} from 'react';

import useEventListener from './use-event-listener';

const useMouseRightClick = (element, action) => {
  const [clicked, setClick] = useState(false);
  const handler = useCallback(
    (e) => {
      e.preventDefault();
      setClick(!clicked);
    },
    [clicked, setClick]
  );

  useEventListener('contextmenu', handler, element);

  return clicked;
};

export default useMouseRightClick;
