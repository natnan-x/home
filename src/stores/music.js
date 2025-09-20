import { defineStore } from "pinia";
import {
  toggle,
  next,
  getCurrentIndex,
  isPlaying,
} from "@/utils/musicPlayer.js";

export const useMusicStore = defineStore("music", {
  state: () => ({
    currentIndex: getCurrentIndex(),
    isPlaying: isPlaying(),
  }),
  actions: {
    toggleMusic() {
      toggle();
      this.isPlaying = isPlaying();
    },
    nextMusic() {
      next();
      this.currentIndex = getCurrentIndex();
    },
  },
});
