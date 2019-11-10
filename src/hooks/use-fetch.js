import {
  useCallback,
  useEffect,
  useState,
} from 'react';

const useFetch = (url, options = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  
  useCallback(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        if (json.errors) {
          setError(json);
        } else {
          setResponse(json);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};

export default useFetch;
