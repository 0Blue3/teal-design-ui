import { withInstall } from "@teal/utils";
import _Tooltip from "./src/tooltip.vue";

// 可以通过app.use使用，也可以通过import方式调用
const Tooltip = withInstall(_Tooltip);
export default Tooltip;

// 导出类型声明
export * from "./src/tooltip";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlTooltip: typeof Tooltip;
  }
}
