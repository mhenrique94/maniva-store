import axios from "axios";

const api = axios.create({
  baseURL: " http://127.0.0.1:8000/api",
});

function getProducts() {
  const data = api.get("/products");

  return data.then((res) => res.data);
}

function getWishlist() {
  // eslint-disable-next-line no-debugger
  const data = api.get("/wishlist");
  const response = data.then((res) => res);
  return response;
}
function updateWishlist(products) {
  const data = api.put(`/wishlist`, {
    data: {
      products: products,
    },
  });
  console.log(data);
}
function getImages() {
  const data = api.get("/images");

  return data.then((res) => res.data);
}
export default { api, getProducts, getWishlist, updateWishlist, getImages };
