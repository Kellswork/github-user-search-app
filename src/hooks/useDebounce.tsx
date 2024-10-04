import { useEffect, useState } from "react";

function useDebounce(text: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return debouncedValue;
}

export default useDebounce;