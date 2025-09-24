<template>
  <div class="max-w-2xl pt-30">
    <h1 class="text-4xl font-bold">
      {{ source?.title }}
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      {{ source?.desc }}
    </p>
  </div>


  <div class="mt-16">
    <ul class="list bg-base-100 mb-10" v-for="(value, index) in source?.list" :key="index">

      <li class="pb-2 tracking-wide font-bold text-xl">{{ value.name }}</li>

      <li class="list-row p-0 pb-6 pt-6 border-0" v-for="(val, idx) in value.list" :key="idx">
        <div class="pr-15 text-sm opacity-70 mt-1">{{ val.year }}</div>
        <div>
          <div class="font-semibold text-base">{{ val.name }}</div>
          <div class="text-sm mt-2">
            <div class="inline-grid *:[grid-area:1/1] mr-2">
              <div class="status animate-ping"></div>
              <div class="status"></div>
            </div> {{ val.job }}
          </div>
          <div class="pt-3">
            <div class="badge badge-soft badge-success badge-sm mr-2" v-for="(v, i) in val.tags" :key="i">{{ v
            }}
            </div>
          </div>
        </div>
        <div class="list-col-wrap text-xs">
          <p class="pt-1" v-for="(v, i) in val.list" :key="i">{{ v }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
// import { projectData } from "@/utils/data.js";
import { computed } from "vue";

import { useLocaleStore } from "@/stores/locale"
const localStore = useLocaleStore();
const source = computed(() => localStore.pageData?.project);

</script>
