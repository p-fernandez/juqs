import {
  useCallback,
} from 'react';

import useEventListener from './use-event-listener';

const useMouseRightClick = (element, callback) => {
  const handler = useCallback(
    (e) => {
      e.preventDefault();
      console.log(callback);
      callback();
    },
    [callback]
  );

  useEventListener('contextmenu', handler, element);
};

export default useMouseRightClick;
