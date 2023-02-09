import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

function getProducts(category) {
  const data = api.get(`/products`, {
    params: {
      category: category,
    },
  });

  return data.then((res) => res.data);
}

function getWishlist() {
  // replace pk to reflect user-related wishlist
  const data = api.get("/wishlist/2");
  const response = data.then((res) => res);
  return response;
}
function updateWishlist(products) {
  // const wishlist_json = JSON.stringify(products);
  // replace pk to reflect user-related wishlist
  const data = api.patch(`/wishlist/2`, {
    products: products,
    // products: wishlist_json,
  });
  console.log(data);
}
function getImages() {
  const data = api.get("/images");

  return data.then((res) => res.data);
}
export default { api, getProducts, getWishlist, updateWishlist, getImages };
