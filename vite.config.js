import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// 在 ESM 模块里模拟 __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
  css: {
    postcss: "./postcss.config.js", // 确保 Vite 使用了正确的 postcss 配置
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // @ 指向 src
    },
  },
  server: {
    host: true, // 允许局域网访问
    port: 5173, // 指定端口
  },
});
