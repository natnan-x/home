<template>
  <div class="transition-all duration-300 bg-base-100" :class="isScrolled
    ? 'fixed top-0 left-0 shadow-md z-50  w-full py-6 ' : 'relative bg-transparent'">
    <div class="flex justify-between px-4 lg:max-w-6xl lg:px-25 mx-auto">
      <div class="avatar" @click="linkTo('/')">
        <div class="w-10 rounded-full">
          <img src="../../assets/portrait.webp" />
        </div>
      </div>
      <div class="items-center space-x-2 shadow rounded-full px-4 hidden lg:flex">
        <p v-for="value in menuData" :key="value.name"
          class="text-sm cursor-pointer px-2 transition hover:text-teal-500" :class="isActive(value.path)
            ? 'font-bold text-teal-500'
            : 'opacity-60 hover:opacity-100'
            " @click="linkTo(value.path)">
          {{ value.name }}
        </p>
      </div>
      <div class="flex lg:hidden flex-1 items-center justify-end">
        <div class="p-2 pl-3 rounded-full mr-4 shadow flex items-center justify-center" @click="openMenu">
          <span class="text-xs mr-1">Menu</span>
          <ChevronDown size="16" />
        </div>
      </div>
      <p @click="toggleTheme" class="flex items-center">
        <Moon v-if="theme === 'dark'" />
        <Sun v-else />
      </p>
    </div>
    <!-- dialog -->
    <dialog id="my_menu_modal" class="modal items-start pt-4 backdrop-blur-xs">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <ul>
          <li v-for="value in menuData" :key="value.name" class="py-2" :class="value.current ? ' text-teal-500' : 'opacity-60 hover:opacity-100'
            " @click="closeMenu">
            {{ value.fullName }}
          </li>
        </ul>
      </div>
    </dialog>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { Moon, Sun, ChevronDown } from 'lucide-vue-next';

import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'
import { menuData } from '@/data/menu.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const themeStore = useThemeStore()

// ⚡ 必须用 storeToRefs 或直接访问 store.theme 才能保持响应式
const { theme } = storeToRefs(themeStore)

// 直接使用 store 方法即可
const { toggleTheme } = themeStore

const route = useRoute();
const isActive = (path) => route.path === path;
const linkTo = (path) => {
  window.location = path;
};

const openMenu = () => {
  const menuModal = document.getElementById("my_menu_modal");
  if (menuModal) {
    menuModal.showModal();
  }
};

const closeMenu = () => {
  const menuModal = document.getElementById("my_menu_modal");
  if (menuModal) {
    menuModal.close();
  }
};

// -- scroll
const isScrolled = ref(false)
const handleScroll = () => {
  // 当滚动超过 50px 时，切换样式
  isScrolled.value = window.scrollY > 64
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
