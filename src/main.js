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
export default i18n; // 给其他地方用
