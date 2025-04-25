import { withInstall } from "@teal/utils";
import _Dropdown from "./src/dropdown.vue";
import _DropdownItem from "./src/dropdown-item.vue";

const TlDropdown = withInstall(_Dropdown);
export default TlDropdown;

export const TlDropdownItem = withInstall(_DropdownItem);

// 导出类型声明
export * from "./src/dropdown";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlDropdown: typeof TlDropdown;
    TlDropdownItem: typeof TlDropdownItem;
  }
}
