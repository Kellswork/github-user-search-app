export async function fetchData<T>(url: string): Promise<T | string> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = (await response.json()) as T;
    return data;
  } catch (error: any) {
    console.log("Fetch error", error.message);
    return `Failed to fetch data: ${error.message}`;
  }
}

// cache fetched data
let cache = new Map<string, Promise<any>>();
export function getData<T>(url: string): Promise<T> {
  if (!cache.has(url)) {
    cache.set(url, fetchData<T>(url));
  }
  return cache.get(url) as Promise<T>;
}
