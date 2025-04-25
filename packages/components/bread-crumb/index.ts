// 用来整合组件的 最终实现导出组件
import { withInstall } from "@teal/utils";
import _Breadcrumb from "./src/breadcrumb.vue";
import _BreadcrumbItem from "./src/breadcrumb-item.vue";

// 可以通过app.use使用，也可以通过import方式调用
const TlBreadcrumb = withInstall(_Breadcrumb);
export default TlBreadcrumb;

export const TlBreadcrumbItem = withInstall(_BreadcrumbItem);

// 导出类型声明
export * from "./src/breadcrumb";
// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlBreadcrumb: typeof TlBreadcrumb;
    TlBreadcrumbItem: typeof TlBreadcrumbItem;
  }
}
