export default async function fetchData(url) {
  console.log(url);
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error };
  } finally {
    console.log("fetch complete");
  }
}
