import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jodoo系统操作说明",
  description: "一个vitepress",
  base: '/my_system_vitepress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', items:[
        {text:'1',link: '/md/Jodoo入门'},
        {text:'2',link: '/md/Jodoo入门'},
        

      ] }
    ],





    sidebar: [
      {
        text: '目录',
        items: [

          { text: 'Jodoo入门', link: '/md/Jodoo入门' },
          { text: '工作台', link: '/Jodoo入门' },
          { text: '表单', link: '/Jodoo入门' },
          { text: '流程表单', link: '/Jodoo入门' },
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
      message: '公司内部文档，请勿外传',
      copyright: 'Copyright © 2026 设备管理部--信息科'

    }

  }
})
