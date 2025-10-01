<template>
  <div class="max-w-2xl pt-30" v-animate="{ type: 'fade-up', delay: 300 }">
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
      v-animate="{ type: 'fade-up', delay: 300 }"
      class="bg-base-100 shadow-sm rounded-xl hover:bg-base-300 transition"
      v-for="value in source?.list"
      :key="value.id"
    >
      <div class="p-5 py-6">
        <div class="flex items-center">
          <img :src="value?.icon" :alt="value.name" class="w-10" />
          <template v-if="value.id == 2">
            <Plus class="mx-3" size="20" />
            <img :src="value?.icon2" :alt="value.name" class="w-9.5" />
          </template>
        </div>
        <h2 class="text-lg font-bold mt-3">{{ value.name }}</h2>
        <p class="mt-4 text-sm" v-html="value.desc"></p>
      </div>
    </div>
  </div>
  <div v-animate="{ type: 'fade-up', delay: 300 }">
    <section
      class="relative w-screen left-1/2 -translate-x-1/2 bg-base-200 py-24 mt-20 overflow-hidden"
    >
      <div v-animate="{ type: 'fade-up', delay: 1000 }">
        <div
          class="absolute left-0 top-10 -bottom-20 w-full flex flex-wrap gap-x-4 gap-y-2 justify-start"
        >
          <span
            v-for="(item, index) in repeatedItems"
            :key="index"
            class="text-sm opacity-5 animate-bounce my-2 mx-10"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            {{ item }}
          </span>
        </div>

        <div class="px-4 lg:max-w-6xl lg:px-25 mx-auto">
          <h2 class="text-2xl font-bold">{{ source?.other?.desc }}</h2>
          <div class="mockup-code w-full mt-10">
            <pre><code>pnpm element-plus ant-design-vue vant</code></pre>
            <pre><code>pnpm echarts @antv/g2</code></pre>
            <pre>pnpm tailwind</pre>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20"
    v-animate="{ type: 'fade-up', delay: 300 }"
  >
    <figure
      class="diff aspect-[1/0.5] lg:aspect-[4/5.1] rounded-2xl"
      tabindex="0"
    >
      <div class="diff-item-1" role="img" tabindex="0">
        <img class="grayscale" alt="daisy" src="../assets/images/laptop.jpg" />
      </div>
      <div class="diff-item-2" role="img">
        <img
          alt="daisy"
          class="blur-md grayscale"
          src="../assets/images/laptop.jpg"
        />
      </div>
      <div class="diff-resizer"></div>
    </figure>
    <section class="mb-3">
      <div class="mb-12" v-for="(val, idx) in source?.other?.list" :key="idx">
        <p class="font-semibold" v-animate="{ type: 'fade-up', delay: 300 }">
          {{ val.category }}
        </p>
        <div
          v-for="(v, i) in val?.items"
          :key="i"
          class="text-sm mt-4"
          v-animate="{ type: 'fade-up', delay: 300 }"
        >
          <div>
            <span class="font-medium">{{ v.name }}</span
            ><span class="opacity-70 ml-1">{{ v.desc }}</span>
          </div>
          <div class="flex justify-between my-4">
            <div class="border-b-1 w-5 mr-2"></div>
            <div class="border-b-1 flex-1 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <ContactComponents v-animate="{ type: 'fade-up', delay: 300 }" />
</template>
<script setup>
  import ContactComponents from "@/components/common/contact.vue";
  import { computed } from "vue";
  import { useLocaleStore } from "@/stores/locale";
  import { Plus } from "lucide-vue-next";

  const localStore = useLocaleStore();
  const source = computed(() => localStore.pageData?.use);

  const items = [
    "element-plus",
    "ant-design-vue",
    "vant",
    "echarts",
    "@antv/g2",
    "less/sass",
    "tailwind",
  ];

  // 重复 20 次
  const repeatCount = 20;
  const repeatedItems = Array.from({ length: repeatCount }).flatMap(
    () => items
  );
</script>
