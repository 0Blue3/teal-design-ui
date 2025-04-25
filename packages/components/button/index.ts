import { withInstall } from "@teal/utils";
import _Button from "./src/button.vue";
const TlButton = withInstall(_Button);
export default TlButton;

// 导出类型声明
export * from "./src/button";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlButton: typeof TlButton;
  }
}
