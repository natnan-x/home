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
              <h2 class="text-xl flex items-start">{{ value.title }}
                <ArrowUpRight size="16" class="ml-2" @click="modalOpen(value)" />
              </h2>
              <div class="text-sm opacity-70 mt-2 leading-relaxed">
                <p v-for="(val, idx) in value.content" :key="idx">{{ val }}</p>
              </div>
              <p class="pt-3 "><a class="text-sm link link-hover opacity-90">{{ value.more }}</a></p>
            </div>
          </template>
          <template v-else>
            <div class="pt-4 pb-10 md:col-span-3 md:p-5 rounded-2xl cursor-pointer opacity-60">
              <h2 class="text-xl flex items-center">{{ value.title }}
                <Link size="16" class="ml-4" @click="modalOpen(value)" />
              </h2>
            </div>
          </template>
        </article>
      </div>
    </div>
  </div>
  <!-- dialog -->
  <dialog v-if="dialog_show" ref="modalRef" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ source.dialog.title }}</h3>
      <div class="modal-action">
        <button class="btn btn-ghost" @click="jumpTo">{{ source.dialog.confirm }}</button>
        <button class="btn btn-neutral " @click="modalClose()">{{ source.dialog.cancel }}</button>
      </div>
    </div>
  </dialog>
</template>
<script setup>
import { computed, ref, nextTick } from "vue";
import { useLocaleStore } from "@/stores/locale"
import { ArrowUpRight } from 'lucide-vue-next';

const localStore = useLocaleStore();
const source = computed(() => localStore.pageData?.work);

const modalRef = ref(null);
const dialog_show = ref(false);
const dialog_link = ref('');
const modalOpen = (info) => {
  dialog_link.value = info.link;
  dialog_show.value = true;
  nextTick(() => {
    modalRef.value.showModal();
  })
}
const modalClose = () => {
  modalRef.value.close();
  nextTick(() => {
    dialog_show.value = false;
  })
}
const jumpTo = () => {
  modalClose();
  window.open(dialog_link.value, "_blank");
}
</script>
