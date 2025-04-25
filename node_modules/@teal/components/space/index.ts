// 用来整合组件的 最终实现导出组件
import { withInstall } from "@teal/utils";
import _Space from "./src/space.vue";

// 可以通过app.use使用，也可以通过import方式调用
const TlSpace = withInstall(_Space);
export default TlSpace;

// 导出类型声明
export * from "./src/space";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlSpace: typeof TlSpace;
  }
}
