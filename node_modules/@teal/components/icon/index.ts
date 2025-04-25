import { withInstall } from "@teal/utils";
import _Icon from "./src/icon.vue";
const Icon = withInstall(_Icon);
export default Icon;

// 导出类型声明
export * from "./src/icon";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlIcon: typeof Icon;
  }
}
