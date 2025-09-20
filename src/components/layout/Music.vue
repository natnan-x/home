<template>
  <div class="fab ">
    <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-soft relative">
      <Music />
      <template v-if="store.isPlaying">
        <span v-for="n in 3" :key="n"
          class="absolute inset-0 rounded-full bg-base-300 opacity-80 animate-pulse-wave z-40"
          :style="{ animationDelay: `${(n - 1) * 0.7}s` }"></span>
      </template>
    </div>
    <!-- 多层波浪 -->


    <div class="fab-close">
      <span class="btn btn-circle btn-lg btn-error">
        <X />
      </span>
    </div>

    <div>
      <button class="btn btn-lg btn-circle" @click="store.nextMusic">
        <ChevronLast />
      </button>
    </div>
    <div>
      <button class="btn btn-lg btn-circle" @click="store.toggleMusic">
        <Pause v-if="store.isPlaying" />
        <Play v-else />
      </button>
    </div>
  </div>
</template>
<script setup>
import { Pause, Play, ChevronLast, Music, X } from "lucide-vue-next";
import { useMusicStore } from "@/stores/music.js";
const store = useMusicStore();
</script>
<style>
@keyframes pulse-wave {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.5);
    opacity: 0.3;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-pulse-wave {
  animation: pulse-wave 1.5s ease-out infinite;
}
</style>
