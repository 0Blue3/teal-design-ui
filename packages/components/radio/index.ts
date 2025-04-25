import { withInstall } from "@teal/utils";
import _TlRadio from "./src/radio.vue";
import _TlRadioGroup from "./src/radio-group.vue";

const TlRadio = withInstall(_TlRadio);
export default TlRadio;
export const TlRadioGroup = withInstall(_TlRadioGroup);
// 导出类型声明
export * from "./src/radio";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlRadio: typeof TlRadio;
    TlRadioGroup: typeof TlRadioGroup;
  }
}
