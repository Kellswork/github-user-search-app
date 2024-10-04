import { useState, useEffect, useMemo } from "react";
import fetchData from "../api/fetchData";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  let cache = useMemo(() => new Map<string, T>(), []);

  useEffect(() => {
    if (!url) {
      return;
    }

    setIsLoading(true);
    setError(null);

    const getData = async () => {
      try {
        if (cache.has(url)) {
          setData(cache.get(url) as T);

        } else {

          const result = await fetchData<T>(url);
          setData(result);
          cache.set(url, result);
        }
        setError(null);
      } catch (error: any) {
        setError("failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url, cache]);

  return { data, isLoading, error };
}
