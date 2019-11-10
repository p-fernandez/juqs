import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import useEventListener from './use-event-listener';

const useMouseRightClick = (element, action) => {
  const onHandleRightClick = useCallback(
    (e) => {
      e.preventDefault();
      console.log(e);
      action();
    },
    [action],
  );
  
  useEventListener('contextmenu', onHandleRightClick, element);

  return onHandleRightClick;
};

export default useMouseRightClick;
