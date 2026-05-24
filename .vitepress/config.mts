import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "中策泰国信息化系统操作说明",
  description: "一个vitepress",
  base: '/my_system_vitepress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', items:[
        {text:'Jodoo使用手册',link:'https://help.jodoo.com/zh-TW/'},
        {text:'简道云快速入门',link:'https://hc.jiandaoyun.com/doc/9001'},
        

      ] }
    ],





    sidebar: [
      {
        text: '目录',
        items: [

          { text: 'Jodoo入门', link: '/md/Jodoo入门' },
          { text: '工作台', link: '/md/工作台' },
          { text: '表单', link: '/md/表单' },
          { text: '流程表单', link: '/md/流程表单' },
          { text: '进阶功能', link: '/Jodoo入门' },
          { text: '常见问题', link: '/Jodoo入门' },
          { text: 'Extension Examples', link: '/Extension Examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://www.jodoo.com/zh-cn' }
    ],

    footer:{
      message: '公司内部文档',
      copyright: 'Copyright © 2026 设备管理部--信息科'

    }

  }
})
