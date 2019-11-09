import {
  useEffect,
  useState,
} from 'react';

const useFetch = (url, options = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
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
     
      setIsLoading(false);
    };
    fetchData();
  }, [url, options]);

  return { isLoading, response, error };
};

export default useFetch;
