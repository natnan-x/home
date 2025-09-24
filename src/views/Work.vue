<template>
  <div class="max-w-2xl pt-30">
    <h1 class="text-4xl font-bold">
      {{ source?.title }}
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      {{ source?.desc }}
    </p>
  </div>
  <div class="mt-16 sm:mt-20">
    <div class="md:border-l md:border-zinc-100 md:pl-6">
      <div v-for="(value, index) in source?.list" :key="index">
        <article class="md:grid md:grid-cols-4 md:items-baseline">
          <p class="opacity-50 text-sm border-l-2 pl-2 lg:border-0 lg:pl-0">
            {{ value.year }}
          </p>
          <template v-if="value.block">
            <div
              class="pt-4 pb-10 md:col-span-3 md:p-5 rounded-2xl md:hover:bg-base-300 transition cursor-pointer md:mb-8">
              <h2 class="text-xl flex items-center">{{ value.title }}
                <Link size="16" class="ml-4" />
              </h2>
              <div class="text-sm opacity-70 mt-2 leading-relaxed">
                <p v-for="(val, idx) in value.content" :key="idx">{{ val }}</p>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="pt-4 pb-10 md:col-span-3 md:p-5 rounded-2xl cursor-pointer opacity-60">
              <h2 class="text-xl flex items-center">{{ value.title }}
                <Link size="16" class="ml-4" />
              </h2>
            </div>
          </template>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useLocaleStore } from "@/stores/locale"
import { Link } from 'lucide-vue-next';

const localStore = useLocaleStore();
const source = computed(() => localStore.pageData?.work);

</script>
