

export async function fetchData(query: string) {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );
    // if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log("Fetch error", error);
    throw error;
  }
}

// cache fetched data
let cache = new Map();
export function getData(query: string){
  if(!cache.has(query)){
    cache.set(query, fetchData(query))
  }
  return cache.get(query);

};
