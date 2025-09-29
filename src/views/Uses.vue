<template>
  <div class="max-w-2xl pt-30">
    <h1 class="text-4xl font-bold">
      {{ source?.title }}
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      {{ source?.desc }}
    </p>
  </div>
  <div
    class="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    <div
      class="bg-base-100 shadow-sm rounded-md hover:bg-base-300 transition"
      v-for="value in source?.list"
      :key="value.id"
    >
      <div class="p-5 py-6">
        <img :src="value?.icon" :alt="value.name" class="w-10" />
        <h2 class="text-lg font-bold mt-3">{{ value.name }}</h2>
        <p class="mt-4 text-sm" v-html="value.desc"></p>
      </div>
    </div>
  </div>

  <section
    class="relative w-screen left-1/2 -translate-x-1/2 bg-base-200 py-24 mt-20"
  >
    <div class="px-4 lg:max-w-6xl lg:px-25 mx-auto">
      <h2 class="text-2xl font-bold">{{ source?.other?.desc }}</h2>
      <div class="mockup-code w-full mt-10">
        <pre><code>pnpm element-plus ant-design-vue vant tailwind </code></pre>
        <pre><code>pnpm echarts @antv/g2</code></pre>
        <pre>pnpm tailwind</pre>
      </div>
    </div>
  </section>
  <div>
    <figure class="diff aspect-16/9" tabindex="0">
      <div class="diff-item-1" role="img" tabindex="0">
        <img alt="daisy" src="../assets/portrait.webp" />
      </div>
      <div class="diff-item-2" role="img">
        <img alt="daisy" class="blur-md" src="../assets/portrait.webp" />
      </div>
      <div class="diff-resizer"></div>
    </figure>
  </div>
</template>
<script setup>
  import { computed } from "vue";
  import { useLocaleStore } from "@/stores/locale";

  const localStore = useLocaleStore();
  const source = computed(() => localStore.pageData?.uses);
</script>
