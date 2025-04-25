import { withInstall } from "@teal/utils";
import _Virtual from "./src/virtual.vue";

// 可以通过app.use使用，也可以通过import方式调用
const Virtual = withInstall(_Virtual);
export default Virtual;

// 导出类型声明
export * from "./src/virtual";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlVirtualList: typeof _Virtual;
  }
}
