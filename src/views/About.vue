<template>
  <div
    class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 pt-30"
  >
    <div class="lg:pl-20">
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
      <h1 class="text-4xl font-bold">
        {{ pageData.title }}
      </h1>
      <div class="mt-6 space-y-7 text-base opacity-60">
        <p v-for="line in pageData.content" :key="line">{{ line }}</p>
      </div>
    </div>
    <div class="lg:pl-20">
      <ul role="list">
        <li class="flex">
          <a
            href="javascript:;"
            class="group flex text-sm font-medium transition hover:text-teal-500 opacity-80"
            @click="$router.push('/')"
          >
            <Globe size="20" />
            <span class="ml-4">Follow My Website</span>
          </a>
        </li>
        <li class="flex mt-4">
          <a
            class="group flex text-sm font-medium transition hover:text-teal-500 opacity-80"
            href="#"
          >
            <Github size="20" /><span class="ml-4">Follow on GitHub</span>
          </a>
        </li>
        <li
          class="mt-8 border-t flex pt-8 border-[color:var(--color-base-300)]"
        >
          <a
            class="group flex text-sm font-medium transition hover:text-teal-500 opacity-80"
            href="mailto:natnan0405@163.com?subject=Hello&body=这里写邮件内容"
          >
            <Mail size="20" />
            <span class="ml-4">natnan0405@163.com</span>
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
