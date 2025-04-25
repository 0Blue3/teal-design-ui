import { withInstall } from "@teal/utils";
import _Tree from "./src/tree.vue";

// 可以通过app.use使用，也可以通过import方式调用
const TlTree = withInstall(_Tree);
export default TlTree;

// 导出类型声明
export * from "./src/tree";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlTree: typeof TlTree;
  }
}
