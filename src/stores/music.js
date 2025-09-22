import { defineStore, acceptHMRUpdate } from "pinia";
import musicA from "@/assets/music/a.mp3";
import musicB from "@/assets/music/b.mp3";
import musicC from "@/assets/music/c.mp3";

const musicList = [musicA, musicB, musicC];

// ---- 预加载函数 ----
function preloadMusic(list) {
  list.forEach((src) => {
    const audio = new Audio();
    audio.src = src;
    // 仅预加载，不播放
    audio.preload = "auto";
  });
}

// 全局单例
if (!window._audio) {
  window._audio = new Audio(musicList[0]);
  window._audio.loop = false;
  window._currentIndex = 0;
  window._isPlaying = false;

  // 初始化时预加载所有音乐
  preloadMusic(musicList);
}

const audio = window._audio;

// 自动下一首
if (!audio._hasEndedEvent) {
  audio.addEventListener("ended", () => {
    window._currentIndex = (window._currentIndex + 1) % musicList.length;
    audio.src = musicList[window._currentIndex];
    audio.play().catch(() => console.log("需要用户交互触发"));
    window._isPlaying = true;
  });
  audio._hasEndedEvent = true;
}

export const useMusicStore = defineStore("music", {
  state: () => ({
    audio,
    musicList,
    currentIndex: window._currentIndex,
    isPlaying: window._isPlaying,
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

// HMR
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMusicStore, import.meta.hot));
}
