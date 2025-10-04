import vueLogo from "../../assets/images/vue-logo.svg";
import reactLogo from "../../assets/images/react-logo.svg";
import wechatLogo from "../../assets/images/wechat-logo.svg";
import uniappLogo from "../../assets/images/uniapp-logo.svg";

export default {
  title: "My Tech Stack & Frequently Used Tools",
  desc: "The following showcases the frameworks, UI libraries, visualization tools, and styling solutions I have extensively used in front-end development. These tools help improve development efficiency, ensure project quality, and enhance user experience.",
  list: [
    {
      id: 1,
      name: "Vue.js",
      icon: vueLogo,
      desc: "5 years of hands-on Vue.js experience. Proficient in the Vue ecosystem, including Vue Router, Composition API, state management (Vuex / Pinia), SSR, and performance optimization.",
    },
    {
      id: 2,
      name: "Mini Programs",
      icon: wechatLogo,
      icon2: uniappLogo,
      desc: "Skilled in both native development and UniApp. Well-versed in Mini Program lifecycle, Skyline rendering engine, subpackage loading, authorization login, and payment workflows.",
    },
    {
      id: 3,
      name: "React",
      icon: reactLogo,
      desc: "Experienced with Hooks, functional components, and state management (Redux / Zustand), capable of rapidly building complex interactive applications.",
    },
  ],
  other: {
    desc: "Frequently used UI frameworks, visualization tools, and styling solutions to enhance efficiency and user experience.",
    list: [
      {
        category: "UI Frameworks",
        overview:
          "Accelerate interface development and ensure design consistency.",
        items: [
          {
            name: "Element UI / Element Plus",
            desc: "Extensive experience in enterprise admin systems.",
          },
          {
            name: "Vant",
            desc: "Mobile-first, efficient use of forms, lists, and interactions.",
          },
          {
            name: "TDesign",
            desc: "Applied in both Web and Mini Programs with theme customization.",
          },
        ],
      },
      {
        category: "Data Visualization",
        overview: "Turn complex data into intuitive insights.",
        items: [
          {
            name: "ECharts",
            desc: "Skilled in dashboards, interactivity, and performance tuning.",
          },
          {
            name: "AntV G2",
            desc: "Capable of multi-dimensional, declarative charting.",
          },
        ],
      },
      {
        category: "Styling & Preprocessors",
        overview: "Build maintainable, responsive, and scalable interfaces.",
        items: [
          {
            name: "Less / Sass",
            desc: "Strong in modular and reusable styling.",
          },
          {
            name: "Tailwind CSS",
            desc: "Expert in utility-first CSS for responsive design.",
          },
        ],
      },
    ],
  },
};
