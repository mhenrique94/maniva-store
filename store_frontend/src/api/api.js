import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

function getProducts() {
  const data = api.get(
    "/products?pagination[start]=0&pagination[limit]=9&populate=*"
  );

  const response = data.then((res) => res.data.data);
  return response;
}

function getWishlist() {
  // eslint-disable-next-line no-debugger
  const data = api.get("/user-wishlist?populate=*");
  const response = data.then((res) => res);
  return response;
}
function updateWishlist() {
  // replace with logic to confirm if already exists and apply switch depending of the case
  const data = api.post("/user-wishlist");
  const response = data.then((res) => res);
  return response;
}
export default { api, getProducts, getWishlist, updateWishlist };
