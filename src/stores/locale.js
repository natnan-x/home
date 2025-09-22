import { defineStore } from "pinia";
import i18n from "@/main";

export const useLocaleStore = defineStore("locale", {
  state: () => ({
    current: "zh", // 当前语言
    pageData: {}, // key = 页面 name, value = 对应语言数据
    commonData: {},
  }),
  actions: {
    async toggle() {
      this.current = this.current === "en" ? "zh" : "en";
      i18n.global.locale.value = this.current;
      await this.initCommon();
      // 刷新已加载页面的数据
      const pages = Object.keys(this.pageData);
      for (const page of pages) {
        this.pageData[page] = await this.loadPageMessages(page);
      }
    },

    async loadPageMessages(page) {
      try {
        const messages = await import(`@/data/${page}.${this.current}.js`);
        return messages.default || messages;
      } catch (err) {
        console.error(`加载页面 ${page} 的语言文件失败`, err);
        return {};
      }
    },

    async initPage(page) {
      const data = await this.loadPageMessages(page);
      this.pageData[page] = data;
      return data;
    },

    async initCommon() {
      const module = await import(`../data/common.${this.current}.js`);
      this.commonData = module;
    },
  },
});
