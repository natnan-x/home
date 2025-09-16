<template>
  <div class="flex justify-between">
    <div class="avatar">
      <div class="w-10 rounded-full">
        <img src="../../assets/portrait.webp" />
      </div>
    </div>
    <div class="items-center space-x-2 shadow rounded-full px-4 hidden lg:flex">
      <p
        v-for="value in menuList"
        :key="value.name"
        class="text-sm cursor-pointer px-1 transition hover:text-teal-500"
        :class="
          value.current
            ? 'font-bold text-teal-500'
            : 'opacity-60 hover:opacity-100'
        "
      >
        {{ value.name }}
      </p>
    </div>
    <div class="flex lg:hidden flex-1 items-center justify-end">
      <div
        class="p-2 pl-3 rounded-full mr-4 shadow flex items-center justify-center"
        @click="openMenu"
      >
        <span class="text-xs mr-1">Menu</span>
        <ChevronDown size="16" />
      </div>
    </div>
    <label class="swap swap-rotate">
      <input type="checkbox" class="theme-controller" value="black" />
      <svg
        class="swap-off h-5 w-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
        />
      </svg>
      <svg
        class="swap-on h-5 w-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
        />
      </svg>
    </label>
    <!-- dialog -->
    <dialog id="my_menu_modal" class="modal items-start pt-4 backdrop-blur-xs">
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <ul>
          <li
            v-for="value in menuList"
            :key="value.name"
            class="py-2"
            :class="
              value.current ? ' text-teal-500' : 'opacity-60 hover:opacity-100'
            "
            @click="closeMenu"
          >
            {{ value.fullName }}
          </li>
        </ul>
      </div>
    </dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronDown } from "lucide-vue-next";

const menuList = ref([
  { name: "About", fullName: "About Me", href: "#", current: true },
  { name: "Works", fullName: "Work experience", href: "#", current: false },
  {
    name: "Projects",
    fullName: "Project Experience",
    href: "#",
    current: false,
  },
  { name: "Uses", fullName: "Using Tools", href: "#", current: false },
]);

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
</script>
