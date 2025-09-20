const projectData = [
  {
    company: "Google",
    time: "2025-09 ~ 2026-09",
    list: [
      {
        project_name: "官网小程序",
        role: "前端开发",
        title: "公司官网小程序开发",
        desc: "负责公司官网小程序的开发与维护，提升用户体验和性能。",
        tech_stack: ["Vue.js", "JavaScript", "CSS"],
        link: "https://example.com/project1",
        tags: [
          { val: "Vue3", class: "badge-info" },
          {
            val: "element-plus",
            class: "badge-success",
          },
        ],
      },
      {
        project_name: "内部管理系统",
        role: "全栈开发",
        desc: "开发和维护公司的内部管理系统，提高工作效率。",
        tech_stack: ["Node.js", "Express", "MongoDB"],
        link: "https://example.com/project2",
      },
    ],
  },
  {
    company: "Facebook",
    time: "2023-06 ~ 2025-08",
    list: [
      {
        project_name: "社交媒体平台",
        role: "后端开发",
        desc: "设计和实现高效的后端服务，支持大规模用户访问。",
        tech_stack: ["Python", "Django", "PostgreSQL"],
        link: "https://example.com/project3",
      },
      {
        project_name: "广告投放系统",
        role: "数据工程师",
        desc: "构建和优化广告投放系统的数据管道和分析工具。",
        tech_stack: ["Apache Spark", "Hadoop", "SQL"],
        link: "https://example.com/project4",
      },
    ],
  },
];

export { projectData };
