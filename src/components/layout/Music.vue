<template>
  <div class="fab">
    <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">
      <Music />
    </div>

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
