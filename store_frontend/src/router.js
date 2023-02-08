import { createWebHistory, createRouter } from "vue-router";

import StoreHome from "./pages/StoreHome.vue";
import ProductsNavigation from "./pages/ProductsNavigation.vue";
import CheckoutCart from "./pages/CheckoutCart.vue";

const routes = [
  { path: "", component: StoreHome },
  { path: "/checkout/", component: CheckoutCart },
  { path: "/products/", component: ProductsNavigation },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
