// tailwind.config.js
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // 引入 DaisyUI 插件
  daisyui: {
    themes: [
      'light', // 默认 light 主题
      'dark', // dark 主题
      'night', // night 主题
      'cupcake', // 其他可选主题
      'lofi', // 其他可选主题
    ],
  },
}
