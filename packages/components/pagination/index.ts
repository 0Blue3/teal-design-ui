import { withInstall } from "@teal/utils";
import _Pagination from "./src/pagination.vue";

const TlPagination = withInstall(_Pagination);
export default TlPagination;

// 导出类型声明
export * from "./src/pagination";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlPagination: typeof TlPagination;
  }
}
