import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "首页" },
    component: () => import(/* webpackChunkName: "home" */ "/@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: () =>
      import(/* webpackChunkName: "login" */ "/@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
