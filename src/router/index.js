import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView from "../views/demo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/demo",
      name: "demo",
      component: DemoView,
    },
    {
      path: "/",
      component: () => import("../components/layout/Layout.vue"),
      children: [
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/work",
          name: "work",
          component: () => import("../views/WorkView.vue"),
        },
        {
          path: "/project",
          name: "project",
          component: () => import("../views/ProjectView.vue"),
        },
      ],
    },
  ],
});

export default router;
