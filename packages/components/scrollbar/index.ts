import { withInstall } from "@teal/utils";
import _Scrollbar from "./src/scrollbar.vue";

const TlScrollbar = withInstall(_Scrollbar);
export default TlScrollbar;

// 导出类型声明
export * from "./src/scrollbar";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlScrollbar: typeof TlScrollbar;
  }
}
