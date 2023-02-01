import { createWebHistory, createRouter } from "vue-router";

import StoreHome from "./pages/StoreHome.vue";
import CheckoutCart from "./pages/CheckoutCart.vue";

const routes = [
  { path: "", component: StoreHome },
  { path: "/checkout/", component: CheckoutCart },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
