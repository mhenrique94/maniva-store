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
function updateWishlist(products) {
  const data = api.put(`/user-wishlist/1`, {
    data: {
      products: products,
    },
  });
  console.log(data);
}
export default { api, getProducts, getWishlist, updateWishlist };
