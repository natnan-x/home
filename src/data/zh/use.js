import { markRaw } from "vue";

import vueLogo from "../../assets/images/vue-logo.svg";
import reactLogo from "../../assets/images/react-logo.svg";
import wechatLogo from "../../assets/images/wechat-logo.svg";
import uniappLogo from "../../assets/images/uniapp-logo.svg";
export default {
  title: "我的技术栈与常用工具",
  desc: "以下是我在前端开发中长期使用的框架、UI库、可视化工具及样式方案，通过这些工具提升开发效率、保证项目质量与用户体验。",
  list: [
    {
      id: 1,
      name: "Vue.js",
      icon: markRaw(vueLogo),
      desc: "5年Vue.js实战经验， 熟练掌握Vue生态，Vue Router、Composition API、状态管理（Vuex / Pinia）、SSR 及性能优化。",
    },
    {
      id: 2,
      name: "小程序",
      icon: markRaw(wechatLogo),
      icon2: markRaw(uniappLogo),
      desc: "精通微信原生开发+uniapp，熟练掌握小程序生命周期、Skyline 渲染引擎、分包加载、授权登录与支付流程等。",
    },
    {
      id: 3,
      name: "React",
      icon: markRaw(reactLogo),
      desc: "熟悉 Hooks、函数式组件与状态管理（Redux / Zustand），能快速构建复杂交互页面。",
    },
  ],
  other: {
    desc: "日常开发中常用 UI 框架、可视化工具和样式预处理器来提升效率和体验。",
    list: [
      {
        category: "UI 框架",
        overview:
          "常用 UI 框架帮助快速构建界面组件，提高开发效率与视觉一致性。",
        items: [
          {
            name: "Element UI / Element Plus",
            desc: "长期用于企业后台系统，熟悉组件封装与二次开发。",
          },
          {
            name: "Vant",
            desc: "移动端项目常用，掌握表单、列表、交互等核心组件的高效组合。",
          },
          {
            name: "TDesign",
            desc: "小程序与 Web 项目均有使用，熟悉主题定制与跨端适配。",
          },
        ],
      },
      {
        category: "可视化",
        overview: "可视化工具用于数据展示与业务洞察，帮助快速理解复杂信息。",
        items: [
          {
            name: "ECharts",
            desc: "擅长大屏可视化与数据交互，掌握图表性能优化与自定义渲染。",
          },
          {
            name: "AntV G2",
            desc: "熟悉语法式图表声明，能实现复杂多维度可视化场景。",
          },
        ],
      },
      {
        category: "样式与预处理器",
        overview: "样式工具与预处理器帮助构建可维护、响应式和高性能的界面。",
        items: [
          {
            name: "Less / Sass",
            desc: "熟悉变量、Mixin 与模块化，提升样式复用性与可维护性。",
          },
          {
            name: "Tailwind CSS",
            desc: "熟练掌握原子化 CSS，结合 Vue3/React 快速构建响应式布局与动画效果。",
          },
        ],
      },
    ],
  },
};
