<script setup>
import { RouterView } from "vue-router";
import { useThemeStore } from "./stores/theme.js";
const themeStore = useThemeStore();
themeStore.initTheme(); // 初始化主题
</script>

<template>
  <RouterView />
</template>
