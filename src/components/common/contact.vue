<template>
  <div class="bg-base-300 rounded-2xl p-15 mt-15 mb-10">
    <p class="font-display text-2xl font-medium text-balance">
      {{ source?.title }}
    </p>

    <button class="btn btn-neutral rounded-full mt-5">
      {{ source?.button }}
    </button>

    <div class="mt-10 border-t pt-10 max-w-xl">
      <h3 class="font-display text-base font-semibold">
        {{ source?.p }}
      </h3>
      <ul class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <li v-for="(value, index) in source?.sections" :key="index">
          <address class="text-sm not-italic font-light">
            <p class="font-medium">{{ value?.label }}</p>
            {{ value?.main }}<br />{{ value?.specific }}
          </address>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import { computed } from "vue";
  import { useLocaleStore } from "@/stores/locale";

  const localStore = useLocaleStore();
  const source = computed(() => localStore.commonData?.footerData);
</script>
