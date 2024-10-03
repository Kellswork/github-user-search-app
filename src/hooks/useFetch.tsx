import { useState, useEffect } from "react";

import { getData } from "../api/fetchData";

export default function useFetch(query: string) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      if (query === "") return null;
      
      try {
        let result = await getData(query);
        setData(result);
      } catch (error: any) {
        setError('failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // cleanup function
  }, [query]);

  return { data, isLoading, error };
}
