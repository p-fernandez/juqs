import {
  useEffect,
  useReducer,
} from 'react';

const fetchReducer = (state, action) => {
 switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: null
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        response: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

const useFetch = (url, options) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    isLoading: false,
    error: null,
    response: null,
  });

  useEffect(() => {
    let unmounted = false;

    const fetchData = async () => {
      if (!unmounted) {
        dispatch({ type: 'FETCH_INIT' });
        try {
          const result = await fetch(url, options);
          const json = await result.json();
          dispatch({ type: 'FETCH_SUCCESS', payload: json });
        } catch (error) {
          dispatch({ type: 'FETCH_FAILURE', payload: error });
        }
      }
    };

    fetchData();

    return () => {
      unmounted = true;
    };
  }, [url, options]);

  return state;
};

export default useFetch;
