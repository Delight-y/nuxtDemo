// 应用程序配置 用于公开在构建时确定的公共变量 eg:网站主题等配置 或 不敏感的项目配置等
export default defineAppConfig({
  title: "hello",
  theme: {
    dark: true,
    color: {
      primary: "#ff0000",
    },
  },
});
