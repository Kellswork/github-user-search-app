import { useState, useEffect } from "react";
import wrapPromise from "../api/wrapPromise";

const useGetData = (url: string, fetcher:<T>(url: string) => Promise<T>) => {
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    if(!url) return;
    const _resource = wrapPromise(fetcher(url));
    setResource(_resource);
  }, [fetcher, url]);

  return resource?.read();
};
export default useGetData;