import { defineStore } from "pinia";
import i18n from "@/main";

export const useLocaleStore = defineStore("locale", {
  state: () => ({
    current: localStorage.getItem("local") || "zh", // 当前语言
    pageData: {}, // key = 页面 name, value = 对应语言数据
    commonData: {},
    loading: false, // 全局 loading
    start: Date.now(),
  }),
  actions: {
    async toggle() {
      this.loading = true;
      this.start = Date.now();
      this.current = this.current === "en" ? "zh" : "en";
      localStorage.setItem("local", this.current);
      i18n.global.locale.value = this.current;
      // 刷新已加载页面的数据
      const pages = Object.keys(this.pageData);
      for (const page of pages) {
        this.pageData[page] = await this.loadPageMessages(page);
      }
      this.commonData = await this.loadCommonMessage();
    },

    async loadPageMessages(page) {
      try {
        const messages = await import(`@/data/${this.current}/${page}.js`);
        return messages.default || messages;
      } catch (err) {
        console.error(`加载页面 ${page} 的语言文件失败`, err);
        return {};
      } finally {
        const elapsed = Date.now() - this.start;
        if (elapsed < 500) {
          await new Promise((resolve) => setTimeout(resolve, 500 - elapsed));
        }
        this.loading = false;
      }
    },

    async loadCommonMessage() {
      try {
        const messages = await import(`@/data/${this.current}/common.js`);
        return messages.default || messages;
      } catch (err) {
        console.error(`加载 common 的语言文件失败`, err);
        return {};
      }
    },

    async initPage(page) {
      const data = await this.loadPageMessages(page);
      this.pageData[page] = data;
      console.log(this.pageData);
      return data;
    },

    async initCommon() {
      const data = await this.loadCommonMessage();
      this.commonData = data;
      return data;
    },
  },
});
