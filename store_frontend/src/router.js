import { createWebHistory, createRouter } from "vue-router";

import StoreHome from "./pages/StoreHome.vue";

const routes = [{ path: "", component: StoreHome }];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
