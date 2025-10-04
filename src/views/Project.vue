<template>
  <div class="max-w-2xl pt-30" v-animate="{ type: 'fade-up', delay: 300 }">
    <h1 class="text-4xl font-bold">
      {{ source?.title }}
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      {{ source?.desc }}
    </p>
  </div>

  <div class="mt-16">
    <div
      class="list bg-base-100 mb-10 w-max-6xl"
      v-for="(value, index) in source?.list"
      :key="index"
    >
      <div
        v-animate="{ type: 'fade-up', delay: 300 }"
        class="pb-2 tracking-wide font-bold text-xl"
      >
        {{ value.name }}
      </div>

      <div
        v-animate="{ type: 'fade-up', delay: 300 }"
        class="grid grid-cols-1 md:grid-cols-4 md:gap-4 p-0 pb-6 pt-6 border-0"
        v-for="(val, idx) in value.list"
        :key="idx"
      >
        <div
          v-animate="{ type: 'fade-up', delay: 300 }"
          class="text-sm opacity-70 mt-1"
        >
          {{ val.year }}
        </div>
        <div class="md:col-span-3">
          <div
            v-animate="{ type: 'fade-up', delay: 300 }"
            class="font-semibold text-base"
          >
            {{ val.name }}
          </div>
          <div
            v-animate="{ type: 'fade-up', delay: 300 }"
            class="pt-3 flex items-center"
          >
            <div
              class="badge badge-soft badge-success badge-sm mr-2"
              v-for="(v, i) in val.tags"
              :key="i"
            >
              {{ v }}
            </div>
          </div>
          <div class="list-col-wrap text-sm mt-4">
            <p
              v-animate="{ type: 'fade-up', delay: 300 }"
              v-html="val.responsible"
            ></p>
            <ul class="mt-2">
              <li
                v-animate="{ type: 'fade-up', delay: 300 }"
                class="font-light md:font-normal flex mb-1"
                v-for="(v, i) in val.list"
                :key="i"
              >
                <span
                  class="w-1 h-1 bg-base-300 mt-2.5 mr-2 rounded-full"
                ></span>
                <p v-html="v" class="flex-1"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  // import { projectData } from "@/utils/data.js";
  import { computed } from "vue";

  import { useLocaleStore } from "@/stores/locale";
  const localStore = useLocaleStore();
  const source = computed(() => localStore.pageData?.project);
</script>
