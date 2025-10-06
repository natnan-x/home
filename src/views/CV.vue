<template>
  <div class="father w-screen h-screen pt-20 bg-black box-border lg:pt-15">
    <div
      class="children w-full h-full rounded-tl-4xl rounded-tr-4xl flex text-black"
      :style="{
        backgroundImage: `url(${cvImg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '120px 120px',
      }"
      :class="theme === 'light' ? 'bg-white ' : 'bg-gray-200 '"
    >
      <!--  -->
      <div
        class="w-full flex flex-col px-10 lg:max-w-5xl lg:px-25 mx-auto justify-center items-center relative"
        v-animate="{ type: 'fade-up', delay: 300 }"
      >
        <button
          class="btn btn-circle absolute left-10 top-10"
          @click="$router.push('/about')"
        >
          <ArrowLeft />
        </button>
        <h1 class="text-3xl mt-5" v-animate="{ type: 'fade-up', delay: 300 }">
          {{ source?.welcome }}
        </h1>
        <div
          class="text-m font-light mt-5 text-left sm:text-center"
          v-animate="{ type: 'fade-up', delay: 300 }"
        >
          {{ source?.desc }}<br />{{ source?.p }}<br />
        </div>
        <div>
          <button
            class="btn btn-soft mt-10"
            @click="downloadFile"
            v-animate="{ type: 'fade-up', delay: 300 }"
          >
            <Download size="16" />{{ source?.button }}
          </button>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script setup>
  import cvImg from "@/assets/images/cubes.png";
  import { computed, ref } from "vue";
  import { useLocaleStore } from "@/stores/locale";
  import { Download, ArrowLeft } from "lucide-vue-next";
  import resumePdf from "@/assets/natnan-cv.pdf";

  const store = useLocaleStore();
  const source = computed(() => store.pageData?.cv);
  const theme = ref(localStorage.getItem("theme") || "light");

  const downloadFile = () => {
    // 创建一个隐藏的 <a> 标签
    const link = document.createElement("a");
    link.href = resumePdf; // Vite 会把 import 的文件打包成 URL
    link.download = "natnan.pdf"; // 指定下载文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
</script>
