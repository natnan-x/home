<template>
  <div class="pt-30">
    <h1 class="text-4xl font-bold">
      Things I’ve made trying to put my dent in the universe.
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      I’ve worked on tons of little projects over the years but these are the
      ones that I’m most proud of. Many of them are open-source, so if you see
      something that piques your interest, check out the code and contribute if
      you have ideas for how it can be improved.
    </p>
  </div>
</template>

<script setup>
import { reactive } from "vue";
// import uniapp1 from "../assets/images/uniapp1.png";

const source = reactive([
  {
    name: "客户端小程序",
    icon: new URL("../assets/images/icon-uniapp.png", import.meta.url).href,
    images: [
      new URL("../assets/images/uniapp1.png", import.meta.url).href,
      new URL("../assets/images/uniapp2.png", import.meta.url).href,
      new URL("../assets/images/uniapp3.png", import.meta.url).href,
      new URL("../assets/images/uniapp4.png", import.meta.url).href,
    ],
  },
]);
</script>
