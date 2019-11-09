import { 
  useEffect,
  useRef,
} from 'react';

import useComponentIsMounted from './use-component-is-mounted';

const voidFunction = () => {};

const useEffectOnlyOnUpdate = (effect, dependencies) => {
  const isMounted = useComponentIsMounted();
  const isInitialMount = useRef(true);

  let { current } = isMounted;
  useEffect(() => {
    let effectCleanupFunc;

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effectCleanupFunc = effect() || voidFunction;
    }
    return () => {
      effectCleanupFunc();

      if (!current) {
        isInitialMount.current = true;
      }
    };
  }, [current, effect, ...dependencies]);
};

export default useEffectOnlyOnUpdate;
