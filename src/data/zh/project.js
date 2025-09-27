export default {
  title: "参与多家企业数字化转型，涉及领域建筑装饰、高端猎头、智慧城市等",
  desc: "我的工作履历、按照时间顺序收集如下，过于久远的不再过多描述，在此感谢陪伴我成长的老东家。",
  list: [
    {
      id: 1,
      name: "尚层装饰",
      year: "2022-2025",
      desc: "",
      list: [
        {
          year: "2023-2025",
          name: "墅学家小程序",
          tags: ["微信原生开发", "skyline", "tdesign-miniprogram"],
          responsible: `
           <p>面向 <strong>C端用户</strong> ，提供 <strong>在线案例预览</strong> 与基于 <strong>用户喜好与路径跟踪</strong> 的精准 <strong>用户画像</strong>，支持 <strong>在线预约</strong>、 <strong>预约意向支付</strong> 等约见前全流程操作。

           <ul class="mt-2 list-disc list-outside">
            <li> 独立负责小程序前端架构搭建，基于 <span class="badge badge-ghost">微信原生开发 + Skyline 渲染引擎</span> 实现高性能渲染与跨页面数据管理，提供沉浸式案例预览体验；熟练掌握小程序生命周期、分包加载、授权登录、场景入口与支付功能，确保弱网和低端设备下的稳定运行。</li>
            <li>封装 <span class="badge badge-ghost">wx.request</span> 与全局状态管理，实现表单提交、列表懒加载及用户行为数据上报，与管理后台联动进行业务分析。</li>
            <li>应用 <span class="badge badge-ghost">TDesign-Miniprogram</span> 提供的表单、弹窗、导航等组件，快速构建多角色（网销、设计师）权限功能和操作流程。</li>
          </ul>
          `,
        },
        {
          year: "2022-2024",
          name: "红珊瑚管理后台",
          tags: ["Vue3", "Vuex", "Element Plus", "less", "ECharts"],
          responsible: `
            <p>
              企业管理后台系统，服务公司内部多部门，提供 <strong>用户管理</strong>、<strong>权限控制</strong>、<strong>业务流程监控</strong> 与 <strong>数据可视化报表</strong> 等功能。
            </p>
            <ul class="mt-2 list-disc list-outside">
              <li>主导前端架构设计，基于 <span class="badge badge-ghost">Vue3</span> + <span class="badge badge-ghost">Vuex</span> + <span class="badge badge-ghost">Vue Router</span> 实现模块化开发与集中状态管理。</li>
              <li>使用 <span class="badge badge-ghost">Element Plus</span> 二次封装表格、表单、对话框、分页等组件，提高开发效率与界面一致性。</li>
              <li>基于 <span class="badge badge-ghost">ECharts</span> 实现多维度数据可视化大屏，支持折线图、柱状图、饼图和实时监控报表。</li>
              <li>优化路由权限控制，确保不同角色用户访问对应功能模块；按需加载路由与组件、拆分打包资源，显著提升页面首屏加载速度。</li>
            </ul>
          `,
        },
        {
          year: "2022-2024",
          name: "企业微信",
          tags: ["Vue3", "Vuex", "Vant", "G2", "less"],
          responsible: `
          <p>
            基于 <strong>企业微信</strong> 生态的 H5 应用，面向企业内部用户，提供 <strong>在线办公</strong>、<strong>审批流</strong>、<strong>消息通知</strong> 与 <strong>数据可视化报表</strong> 等功能，帮助提升移动端办公效率与业务协同能力。
          </p>
          <ul class="mt-2 list-disc list-outside">
            <li>基于 <span class="badge badge-ghost">Vue3</span> + <span class="badge badge-ghost">Vuex</span> + <span class="badge badge-ghost">Vant</span> 搭建项目框架，制定统一编码规范与组件化开发方案，提升团队协作效率。</li>
            <li>使用 <span class="badge badge-ghost">Vant</span> 组件库开发适配移动端的表单、弹窗、导航与列表等核心业务模块。</li>
            <li>基于 <span class="badge badge-ghost">G2</span> 实现数据可视化图表，支持实时监控与多维度业务指标分析。</li>
            <li>通过 <span class="badge badge-ghost">Vue Router</span> 结合企业微信 OAuth 实现权限与路由控制，保障用户数据安全。</li>
          </ul>
          `,
        },
      ],
    },
    {
      id: 2,
      name: "科锐国际",
      year: "2017-2022",
      desc: "",
      list: [
        {
          name: "医脉、禾娃",
          tags: ["React", "Taro"],
          year: "2021-2022",
          responsible: `
            <p>
              面向移动端的医疗与教育类应用，支持多平台（微信小程序、H5）访问，提供 <strong>数据展示</strong> 与 <strong>业务操作</strong> 功能。
            </p>
            <ul class="mt-2 list-disc list-outside">
              <li>基于 <span class="badge badge-ghost">React</span> + <span class="badge badge-ghost">Taro</span> 开发多端应用，保证 H5 与小程序代码复用率。</li>
              <li>实现移动端表单、列表与图表模块，支持用户操作与数据交互。</li>
              <li>优化小程序分包与性能，保障用户流畅体验。</li>
            </ul>
          `,
        },
        {
          name: "CRM管理系统",
          tags: ["React", "AntD"],
          year: "2021-2022",
          responsible: `
            <p>
              企业客户关系管理系统，面向销售与业务团队，提供 <strong>客户管理</strong>、<strong>销售漏斗</strong> 与 <strong>数据报表</strong> 等功能。
            </p>
            <ul class="mt-2 list-disc list-outside">
              <li>基于 <span class="badge badge-ghost">React</span> + <span class="badge badge-ghost">AntD</span> 搭建前端架构，实现组件化开发。</li>
              <li>封装表格、表单与图表组件，提升开发效率与界面一致性。</li>
              <li>实现权限控制与路由守卫，保障用户数据安全。</li>
            </ul>
          `,
        },
        {
          name: "才客-顾问管理后台",
          tags: ["Vue2", "VueX", "Element UI", "AngularJS 1.4x"],
          year: "2017-2021",
          responsible: `
            <p>
              企业顾问管理后台，由我主导开发和技术迁移，将原有 <span class="badge badge-ghost">AngularJS 1.4x</span> 项目迁移至 <span class="badge badge-ghost">Vue2</span> + <span class="badge badge-ghost">Vuex</span> 技术栈，实现现代化前端架构。
            </p>
            <ul class="mt-2 list-disc list-outside">
              <li><strong>主导前端整体架构设计</strong>，完成 AngularJS → Vue2 技术迁移，包括模块化开发、组件化封装与状态管理改造。</li>
              <li>使用 <span class="badge badge-ghost">Element UI</span> 构建表格、表单、弹窗、分页等核心模块，实现统一 UI 风格与交互体验。</li>
              <li>优化路由和权限控制，通过 Vue Router 守卫和 Vuex 权限模块，保障不同角色访问安全。</li>
              <li>制定开发规范和编码标准，指导团队成员开发，提升团队协作效率和项目可维护性。</li>
              <li>在迁移过程中重构数据交互逻辑，提高系统性能与稳定性，保障业务平滑上线。</li>
            </ul>
                  `,
        },
      ],
    },
  ],
};
