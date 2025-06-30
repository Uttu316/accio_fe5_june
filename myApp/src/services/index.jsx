export const api = async () => {
  try {
    const URL = "https://fakestoreapi.com/products";

    const res = await fetch(URL);
    if (res.status >= 200 && res.status < 300) {
      const resData = await res.json();
      return resData;
    }
    throw new Error("Failed to fetch data", { cause: res });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
