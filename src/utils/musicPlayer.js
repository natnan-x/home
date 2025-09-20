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
  // 开发模式下 HMR 可能刷新模块，不要重新创建
  window._audio.loop = true;
}

export const audio = window._audio;

export function play() {
  audio.play().catch(() => console.log("需要用户交互触发"));
  window._isPlaying = true;
}

export function pause() {
  audio.pause();
  window._isPlaying = false;
}

export function toggle() {
  window._isPlaying ? pause() : play();
}

export function next() {
  audio.pause();
  window._currentIndex = (window._currentIndex + 1) % musicList.length;
  audio.src = musicList[window._currentIndex];
  play();
}

export function getCurrentIndex() {
  return window._currentIndex;
}

export function isPlaying() {
  return window._isPlaying;
}
