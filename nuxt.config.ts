/*
 * @Author: lili11.yang
 * @Date: 2024-02-29 15:02:13
 * @Description:
 * @LastEditors: lili11.yang
 * @LastEditTime: 2024-02-29 17:13:11
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 全局配置
  devtools: { enabled: true },
  // 开发环境
  $development: {},
  // 可通过useRuntimeConfig()组合函数暴露给程序其他部分 需要在构建后使用环境变量指定的私有或公共令牌
  runtimeConfig: {
    // 默认只在服务器端使用的私有键
    apiSecret: "123",
    public: {
      test: "cs",
    }, // public中的键也可在客户端中使用
  },
  //样式表将被内联到 Nuxt 渲染的 HTML 中，全局注入并存在于所有页面中
  css: ["~/assets/common.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 全局引入_color.scss
          additionalData: '@use "@/assets/_color.scss" as *;',
        },
      },
    },
  },
});
