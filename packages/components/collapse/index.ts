import { withInstall } from "@teal/utils";
import _Collapse from "./src/collapse.vue";
import _CollapseGroup from "./src/collapse-group.vue";

const TlCollapse = withInstall(_Collapse);
export default TlCollapse;

export const TlCollapseGroup = withInstall(_CollapseGroup);

// 导出类型声明
export * from "./src/collapse";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlCollapse: typeof TlCollapse;
    TlCollapseGroup: typeof TlCollapseGroup;
  }
}
