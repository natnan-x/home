import vueLogo from "../../assets/images/vue-logo.svg";
import reactLogo from "../../assets/images/react-logo.svg";
import wechatLogo from "../../assets/images/wechat-logo.svg";
export default {
  title: "我的技术栈与常用工具",
  desc: "以下是我在前端开发中长期使用的框架、UI库、可视化工具及样式方案，通过这些工具提升开发效率、保证项目质量与用户体验。",
  list: [
    {
      id: 1,
      name: "Vue.js",
      icon: vueLogo,
      desc: "5年Vue.js实战经验， 熟练掌握Vue生态，Vue Router、Composition API、状态管理（Vuex / Pinia）、SSR 及性能优化。",
    },
    {
      id: 2,
      name: "微信小程序",
      icon: wechatLogo,
      desc: "精通原生开发，熟练掌握小程序生命周期、Skyline 渲染引擎、分包加载、授权登录与支付流程等。",
    },
    {
      id: 3,
      name: "React",
      icon: reactLogo,
      desc: "熟悉 Hooks、函数式组件与状态管理（Redux / Zustand），能快速构建复杂交互页面。",
    },
  ],
  other: {
    desc: "日常开发中常用 UI 框架、可视化工具和样式预处理器来提升效率和体验。",
  },
};
