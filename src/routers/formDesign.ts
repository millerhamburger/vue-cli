import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("../pages/Home.vue") },
  { path: "/preview", name: "preview", component: () => import("../pages/Preview.vue") },
];

export default routes;