<template>
  <div class="relative w-screen h-screen overflow-hidden flex items-center justify-center">
    <!-- 背景数字矩阵 -->
    <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center pointer-events-none space-y-8">
      <div v-for="row in 20" :key="row" class="flex justify-center space-x-16">
        <span v-for="col in 20" :key="col" class="text-[1rem] opacity-10 animate-bounce"
          :style="{ animationDelay: `${(row + col) * 0.1}s` }">
          404
        </span>
      </div>
    </div>

    <!-- 前景内容 -->
    <div class="flex w-full flex-row pt-6 h-screen items-center justify-center">
      <div class="flex flex-col justify-start items-start mt-[-100px]">
        <div class="card rounded-box grid h-10 grow place-items-center text-3xl font-bold">404</div>
        <div class="divider divider-horizontal"></div>
        <div class="card rounded-box grid h-10 grow place-items-center text-m opacity-70">This page could not be found.
        </div>
        <a class="link" @click="$router.push('/')">Go Home</a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
    opacity: 0.05;
  }

  50% {
    transform: translateY(-20px);
    opacity: 0.2;
  }
}

.animate-bounce {
  animation: bounce 3s infinite;
}
</style>
