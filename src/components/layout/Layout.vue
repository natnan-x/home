<template>
  <div class="flex w-full flex-col pt-6 min-h-screen ">
    <LayoutHeader />
    <div class="lg:px-25 px-4 max-w-6xl mx-auto">
      <main>
        <!-- 子页面渲染在这里 -->
        <RouterView />
      </main>
      <LayoutFooter />
    </div>
  </div>
  <LayoutMusic />
</template>
<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutFooter from "@/components/layout/Footer.vue";
import LayoutMusic from "@/components/layout/Music.vue";

import { RouterView } from "vue-router";
</script>
