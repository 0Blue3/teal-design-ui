import { withInstall } from "@teal/utils";
import _Empty from "./src/empty.vue";

const TlEmpty = withInstall(_Empty);
export default TlEmpty;

// 导出类型声明
export * from "./src/empty";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlEmpty: typeof TlEmpty;
  }
}
