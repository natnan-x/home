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
      if (newName) {
        loadPageData(newName);
        loadCommonData();
      }
    },
    { immediate: true } // 立即执行一次
  );
  // 监听语言变化，刷新当前页面
  watch(
    () => store.current,
    () => {
      if (route.name) {
        loadPageData(route.name);
      }
    }
  );
</script>

<template>
  <!-- 全局 loading -->
  <div
    v-if="store.loading"
    class="fixed inset-0 bg-base-100 opacity-90 flex items-center justify-center z-50"
  >
    <span class="loading loading-ball loading-xs"></span>
    <span class="loading loading-ball loading-sm"></span>
    <span class="loading loading-ball loading-md"></span>
    <span class="loading loading-ball loading-lg"></span>
    <span class="loading loading-ball loading-xl"></span>
  </div>
  <RouterView />
</template>
