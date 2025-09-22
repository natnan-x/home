<script setup>
import { watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useThemeStore } from "./stores/theme.js";
import { useLocaleStore } from "@/stores/locale.js";

const themeStore = useThemeStore();
themeStore.initTheme(); // 初始化主题

const store = useLocaleStore();
const route = useRoute();
// 封装加载页面数据
async function loadPageData(pageName) {
  await store.initPage(pageName);
}
async function loadCommonData() {
  await store.initCommon();
}

// 监听路由变化
watch(
  () => route.name,
  (newName) => {
    if (newName) loadPageData(newName);
  },
  { immediate: true } // 立即执行一次
);
// 监听语言变化，刷新当前页面
watch(
  () => store.current,
  () => {
    if (route.name) {
      loadPageData(route.name)
      loadCommonData()
    };
  }
);
</script>

<template>
  <RouterView />
</template>
