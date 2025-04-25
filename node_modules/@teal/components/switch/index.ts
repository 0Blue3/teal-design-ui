import { withInstall } from "@teal/utils";
import _TlSwitch from "./src/switch.vue";

const TlSwitch = withInstall(_TlSwitch);
export default TlSwitch;

// 导出类型声明
export * from "./src/switch";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlSwitch: typeof TlSwitch;
  }
}
