import { withInstall } from "@teal/utils";
import _InputNumber from "./src/input-number.vue";

const TlInputNumber = withInstall(_InputNumber);
export default TlInputNumber;

// 导出类型声明
export * from "./src/input-number";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlInputNumber: typeof TlInputNumber;
  }
}
