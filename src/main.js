import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router/index.js";

// 初始化 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "zh", // 默认语言
  fallbackLocale: "en",
  messages: {},
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
export default i18n; // 给其他地方用
