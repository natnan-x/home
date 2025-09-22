import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import DemoView from "../views/demo.vue";
import NotFound from "@/views/NotFound.vue";

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
          component: () => import("../views/About.vue"),
        },
        {
          path: "/work",
          name: "work",
          component: () => import("../views/Work.vue"),
        },
        {
          path: "/project",
          name: "project",
          component: () => import("../views/Project.vue"),
        },
      ],
    },
    // ⚡ 404 页面必须放在最后
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
