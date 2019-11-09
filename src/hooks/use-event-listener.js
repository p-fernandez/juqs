import { useRef, useEffect } from 'react';

const useEventListener = (eventName, handler, element) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.current && element.current.addEventListener;
    if (!isSupported) {
      console.error(`Unable to add ${eventName} to ${element}`); 
      return;     
    }

    const eventListener = event => savedHandler.current(event);
     
    element.current.addEventListener(eventName, eventListener);
      
    return () => {
      element.current.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
