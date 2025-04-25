import { withInstall } from "@teal/utils";
import _Input from "./src/input.vue";

const TlInput = withInstall(_Input);
export default TlInput;

// 导出类型声明
export * from "./src/input";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlInput: typeof TlInput;
  }
}
