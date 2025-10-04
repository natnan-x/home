<template>
  <div
    class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 pt-30"
  >
    <div v-animate="{ type: 'fade-up', delay: 300 }" class="lg:pl-20">
      <figure class="hover-gallery max-w-xs px-2.5 lg:max-w-none rotate-3">
        <img
          class="aspect-square bg-zinc-100 dark:bg-zinc-800 object-cover rounded-2xl"
          src="../assets/images/about3.jpg"
        />
        <img
          class="aspect-square bg-zinc-100 dark:bg-zinc-800 object-cover rounded-2xl"
          src="../assets/images/about1.jpg"
        />
        <img
          class="aspect-square bg-zinc-100 dark:bg-zinc-800 object-cover rounded-2xl"
          src="../assets/images/about2.jpg"
        />
      </figure>
    </div>
    <div class="lg:order-first lg:row-span-2">
      <h1
        v-animate="{ type: 'fade-up', delay: 300 }"
        class="text-4xl font-bold"
      >
        {{ pageData.title }}
      </h1>
      <div class="mt-6 space-y-7 text-base opacity-60">
        <p
          v-animate="{ type: 'fade-up', delay: 300 }"
          v-for="(line, index) in pageData.desc"
          :key="index"
        >
          {{ line }}
        </p>
      </div>
    </div>
    <div class="lg:pl-20">
      <ul class="list">
        <li
          v-animate="{ type: 'fade-up', delay: 300 }"
          v-for="(value, index) in pageData?.list"
          :key="index"
          class="mb-4"
          :class="{
            'pt-4 border-t flex border-[color:var(--color-base-300)]':
              value?.border,
          }"
        >
          <a
            href="javascript:;"
            class="group flex text-sm font-medium transition hover:text-teal-500 opacity-80"
            @click="$router.push(value.path)"
          >
            <component
              :is="value.icon"
              class="w-5 h-5 text-gray-500 group-hover:text-teal-500 transition-colors duration-200"
            />
            <span class="ml-4">{{ value.desc }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { Github, Mail, Globe } from "lucide-vue-next";
  import { computed, watch } from "vue";
  import { useRoute } from "vue-router";
  import { useLocaleStore } from "@/stores/locale";

  const store = useLocaleStore();
  const route = useRoute();

  const pageData = computed(
    () => store.pageData[route.name] || { title: "", typewriter: [] }
  );

  watch(
    () => store.current,
    () => {
      // 当语言切换时 computed 自动更新 page
    }
  );
</script>

<style></style>
