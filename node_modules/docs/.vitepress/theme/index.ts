// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

// vue preview component
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";

// custom-style
import "./style.css";
import "./vitepress-demo-preview.css";

// awesome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

// components
import "@teal/theme-chalk/src/index.scss";
import GlobalRegistrationComponent from "../useComponents/globalregistercomponents";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    app.component("demo-preview", ElementPlusContainer);
    GlobalRegistrationComponent(app);
  },
} satisfies Theme;
