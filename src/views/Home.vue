<template>
  <div class="min-h-[var(--vh)] bg-gray-100 lg:px-25 max-w-6xl mx-auto flex flex-col justify-between md:justify-center">
    <div class="flex-1 py-12 px-8 text-lg leading-relaxed text-left md:flex-none">
      <h1 class="text-sm font-medium">NatNan</h1>
      <div class="divider divider-start font-bold mt-1">欢迎你的到来</div>
      <div ref="typeTarget" class="mt-14 min-h-100"></div>
    </div>
    <div
      class="flex justify-between h-14 px-8 bg-black opacity-90 text-white items-center cursor-pointer md:w-30 md:m-8 md:px-4"
      @click="$router.push('/work')">
      <span>ENTER</span>
      <SquareArrowRight />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Typewriter from "t-writer.js";
import { SquareArrowRight } from "lucide-vue-next";
import { loadPageMessages } from "@/utils/loadLocaleMessages.js";
import i18n from "@/main";


const typeTarget = ref(null);

// 打字机函数
const startTypewriter = () => {
  if (!typeTarget.value) return;
  typeTarget.value.innerHTML = ""; // 清空旧内容

  const messages =
    i18n.global.getLocaleMessage(i18n.global.locale.value).home?.typewriter ||
    [];
  if (!messages) return;

  const writer = new Typewriter(typeTarget.value, {
    loop: false,
    typeSpeed: 40,
    deleteSpeed: 0
  });

  messages.forEach(str => writer.type(str));
  writer.start();
};

// 页面加载时，按需加载语言文件并启动打字
onMounted(async () => {
  await loadPageMessages("home");
  startTypewriter();
  setVh()
  window.addEventListener('resize', setVh)
  window.addEventListener('orientationchange', setVh)
});

// 动态设置 --vh，保证 iOS Safari 正确显示
const setVh = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
}
</script>
