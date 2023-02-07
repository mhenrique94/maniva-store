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
  const data = api.get("/user-wishlist?populate=*");
  const response = data.then((res) => res);
  return response;
}
function updateWishlist(products) {
  const data = api.put(`/user-wishlist/1`, {
    data: {
      products: products,
    },
  });
  console.log(data);
}
export default { api, getProducts, getWishlist, updateWishlist };
