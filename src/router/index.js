import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import DemoView from "../views/demo.vue";
import CVView from "@/views/CV.vue";
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
      path: "/cv",
      name: "cv",
      component: CVView,
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
        {
          path: "/use",
          name: "use",
          component: () => import("../views/Use.vue"),
        },
      ],
    },
    // ⚡ 404 页面必须放在最后
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果是浏览器前进/后退
    if (savedPosition) {
      return savedPosition;
    } else {
      // 每次切换路由都滚动到顶部
      return { left: 0, top: 0 };
    }
  },
});

export default router;
