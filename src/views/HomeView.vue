<script setup>
import { onMounted, ref } from "vue";
import Typewriter from "t-writer.js";
import { SquareArrowRight } from "lucide-vue-next";

const typeTarget = ref(null);

onMounted(() => {
  if (typeTarget.value) {
    const writer = new Typewriter(typeTarget.value, {
      loop: false,
      typeSpeed: 40,
      deleteSpeed: 0,
    });

    writer
      .type("In a world where facts can be blurred<br>")
      .type("and science, often filtered,<br>")
      .type("<strong>the truth can be hard to find.</strong><br><br>")
      .type("So as we launch our new GF 15% Solution<br>")
      .type("we're taking complex scientific papers<br>")
      .type("and breaking them down<br>")
      .type("to clarify industry myths.<br><br>")
      .type("<strong>Because the Truth should be Ordinary.</strong>")
      .start()
  }
});
</script>

<template>
  <div class="lg:px-25 max-w-6xl mx-auto flex flex-col justify-between h-screen md:justify-start">
    <div class="flex-1 py-12 px-8 text-lg leading-relaxed text-left md:flex-none">
      <h1 class="text-sm font-medium">NatNan</h1>
      <div class="divider divider-start font-bold mt-1">欢迎你的到来</div>
      <div ref="typeTarget" class="mt-14 min-h-100"></div>
    </div>
    <div
      class="flex justify-between h-14 px-4 bg-black opacity-90 text-white items-center cursor-pointer md:w-30 md:m-8"
      @click="$router.push('/work')">
      <span>ENTER</span>
      <SquareArrowRight />
    </div>
  </div>
</template>
