const url = "https://fakestoreapi.com/products";

function getProducts() {
  return fetchData();
}
async function fetchData() {
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  } finally {
    console.log("fetch complete");
  }
}

export { getProducts };
