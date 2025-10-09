import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router/index.js";
import animate from "./directives/animate.js";

// 初始化 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem("local") || "zh", // 默认语言
  fallbackLocale: "en",
  messages: {},
});

const app = createApp(App);
app.directive("animate", animate);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
// 🌈 开发者控制台彩蛋
console.log(
  `%c🚀 Hey Developer! %c\n\n👋 我是南楠，一名前端开发工程师。\n\n目前正在寻找新的远程或成都本地前端岗位机会。\n\n如果你有合适的机会，欢迎联系我！\n\n✉️ 邮箱：%c natnan0405@163.com`,
  "color: #fff; background: linear-gradient(90deg,#42b983,#00b4d8); font-size: 18px; font-weight: bold; padding: 10px 20px; border-radius: 8px;",
  "color: #666; font-size: 12px; line-height: 1.6;",
  "color: #42b983; font-weight: bold; font-size: 12px;"
);
export default i18n; // 给其他地方用
