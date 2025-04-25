import { withInstall } from "@teal/utils";
import _Badge from "./src/badge.vue";
const TlBadge = withInstall(_Badge);
export default TlBadge;

// 导出类型声明
export * from "./src/badge";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlBadge: typeof TlBadge;
  }
}
