import { defineStore } from "pinia";
import musicA from "@/assets/music/a.mp3";
import musicB from "@/assets/music/b.mp3";
import musicC from "@/assets/music/c.mp3";

const musicList = [musicA, musicB, musicC];

// 挂载全局单例
if (!window._audio) {
  window._audio = new Audio(musicList[0]);
  window._audio.loop = true;
  window._currentIndex = 0;
  window._isPlaying = false;
} else {
  window._audio.loop = true;
}

export const useMusicStore = defineStore("music", {
  state: () => ({
    currentIndex: window._currentIndex,
    isPlaying: window._isPlaying,
    audio: window._audio,
    musicList: musicList,
  }),
  actions: {
    play() {
      this.audio.play().catch(() => console.log("需要用户交互触发"));
      this.isPlaying = true;
      window._isPlaying = true;
    },
    pause() {
      this.audio.pause();
      this.isPlaying = false;
      window._isPlaying = false;
    },
    toggleMusic() {
      this.isPlaying ? this.pause() : this.play();
    },
    nextMusic() {
      this.audio.pause();
      this.currentIndex = (this.currentIndex + 1) % this.musicList.length;
      window._currentIndex = this.currentIndex;
      this.audio.src = this.musicList[this.currentIndex];
      this.play();
    },
    setMusic(index) {
      if (index < 0 || index >= this.musicList.length) return;
      this.audio.pause();
      this.currentIndex = index;
      window._currentIndex = index;
      this.audio.src = this.musicList[index];
      this.play();
    },
  },
});
