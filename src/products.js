import fetchData from "./fetchData";

const mainUrl = "https://fakestoreapi.com/products/";

// I had to do caching to workaround the limitations of fakestoreapi.com
let cachedData = { status: "success", data: null };

function getAllProducts() {
  return getData(mainUrl);
}
function getSpecificProducts(arr) {
  return getSerialData(arr);
}

async function getData(url) {
  if (cachedData.data) {
    console.log("returning cached results");
    return cachedData;
  } else {
    console.log("fetching");
    let result = { status: "success", data: null };
    const response = await fetchData(url);
    result.data = response.data;
    if (response.status === "success") {
      cachedData.data = response.data;
    } else {
      result.status = "fail";
    }
    return result;
  }
}
async function getSerialData(arr) {
  let result = { status: "success", data: [] };
  if (cachedData.data) {
    console.log("returning cached results");
    cachedData.data.forEach((prod) => {
      arr.forEach((i) => {
        if (prod.id === parseInt(i)) {
          result.data.push(prod);
        }
      });
    });
  } else {
    console.log("fetching");
    for (let i = 0; i < arr.length; i++) {
      const response = await fetchData(mainUrl + arr[i]);
      if (response.status === "success") {
        result.data.push(response.data);
      } else {
        result.status = "fail";
        result.data = response.data;
        break;
      }
    }
  }
  return result;
}

export { getAllProducts, getSpecificProducts };
