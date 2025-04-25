import { withInstall } from "@teal/utils";
import _TlCheckbox from "./src/checkbox.vue";
import _TlCheckboxGroup from "./src/checkbox-group.vue";
const TlCheckbox = withInstall(_TlCheckbox);
export default TlCheckbox;
export const TlCheckboxGroup = withInstall(_TlCheckboxGroup);

// 导出类型声明
export * from "./src/checkbox";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlCheckbox: typeof _TlCheckbox;
    TlCheckboxGroup: typeof _TlCheckboxGroup;
  }
}
