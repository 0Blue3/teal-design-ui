import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// 组件覆盖
import aliasComponent from "./useComponents/aliasComponents";
// 组件导航
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Teal Element UI",
  description: "基于Vue的UI组件库",
  srcDir: "src",
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  vite: {
    resolve: {
      alias: aliasComponent,
    },
  },
  themeConfig: {
    siteTitle: "Teal Design",
    logo: "/logo.svg",
    nav: [
      { text: "组件", link: "/components/quickstart" },
      { text: "博客", link: "/blog" },
      { text: "开发", link: "/develop" },
    ],
    sidebar: sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/0Blue3/teal-design-ui" },
    ],
  },
});
