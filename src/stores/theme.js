// src/stores/theme.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(localStorage.getItem("theme") || "light");

  // 切换主题
  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme.value);
    localStorage.setItem("theme", theme.value);
  }

  // 初始化时同步 DOM
  function initTheme() {
    document.documentElement.setAttribute("data-theme", theme.value);
  }

  return { theme, toggleTheme, initTheme };
});
