<template>
  <div class="min-h-screen">
    <div class="p-6">
      <h1 class="text-4xl font-bold">DaisyUI Theme Switcher</h1>
      <p class="mt-4 text-xl">当前主题：{{ theme }}</p>
      <button @click="toggleTheme" class="btn btn-primary mt-4">切换主题</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 主题状态（light, dark, night）
const theme = ref('light')

// 切换主题
const toggleTheme = () => {
  const nextTheme = theme.value === 'light' ? 'dark' : theme.value === 'dark' ? 'night' : 'light'

  theme.value = nextTheme

  // 切换主题类，确保添加到 <html> 元素
  document.documentElement.setAttribute('data-theme', nextTheme)

  // 将主题保存在 localStorage 中
  localStorage.setItem('theme', nextTheme)
}

// 页面加载时检查 localStorage 中是否有保存的主题
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.value = savedTheme
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
})
</script>

<style scoped>
button {
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}
</style>
