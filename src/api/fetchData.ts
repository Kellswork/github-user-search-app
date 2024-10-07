export default async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = (await response.json()) as T;
    return data;
  } catch (error: any) {
    // console.log("fetch error", error);
    throw error;
  }
}
