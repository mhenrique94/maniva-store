import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

function getProducts() {
  debugger; // eslint-disable-line no-debugger
  const data = api.get(
    "/products?pagination[start]=0&pagination[limit]=9&populate=*"
  );

  const response = data.then((res) => res.data);
  return response;
}

export default { api, getProducts };
