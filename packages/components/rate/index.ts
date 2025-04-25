import { withInstall } from "@teal/utils";
import _Rate from "./src/rate.vue";

const TlRate = withInstall(_Rate);
export default TlRate;

// 导出类型声明
export * from "./src/rate";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlRate: typeof TlRate;
  }
}
