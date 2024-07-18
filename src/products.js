import fetchData from "./fetchData";

const mainUrl = "https://fakestoreapi.com/products/";

// I had to do caching to workaround the limitations of fakestoreapi.com
let cachedData = null;

function getAllProducts() {
  return getData(mainUrl);
}
function getSpecificProducts(arr) {
  return getSerialData(arr);
}

async function getData(url) {
  if (cachedData) {
    console.log("returning cached results");
    return cachedData;
  } else {
    let result = { status: "success", data: null };
    const response = await fetchData(url);
    result.data = response.data;
    if (response.status === "success") {
      cachedData = response.data;
    } else {
      result.status = "fail";
    }
    return result;
  }
}
async function getSerialData(arr) {
  let result = { status: "success", data: [] };
  if (cachedData) {
    console.log("returning cached results");
    cachedData.forEach((prod) => {
      arr.forEach((i) => {
        if (prod.id === i.id) {
          result.data.push(prod);
        }
      });
    });
  } else {
    for (let i = 0; i < arr.length; i++) {
      const response = await fetchData(mainUrl + arr[i].id);
      if (response.status === "success") {
        result.data.push(response.data);
      } else {
        result.status = "fail";
        result.data = response.data;
      }
    }
  }
  return result;
}

export { getAllProducts, getSpecificProducts };
