import { useState, useEffect } from "react";
import wrapPromise from "../api/wrapPromise";

const useGetData = (url: string, fetcher: (url: string) => any) => {
  const [resource, setResource] = useState<any>(null);

  useEffect(() => {
    const _resource = wrapPromise(fetcher(url));
    setResource(_resource);
  }, [fetcher, url]);

  return resource?.read();
};
export default useGetData;