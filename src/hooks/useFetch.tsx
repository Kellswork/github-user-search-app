import { useState, useEffect } from "react";
import { getData } from "../api/fetchData";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!url){
      return;
    }
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      
      try {
        let result = await getData<T>(url);
        setData(result);
      } catch (error: any) {
        setError('failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  
  }, [url]);

  return { data, isLoading, error };
}
