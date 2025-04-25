import { withInstall } from "@teal/utils";
import _TlTable from "./src/table.vue";
import _TlColumn from "./src/column";

// 可以通过app.use使用，也可以通过import方式调用
const TlTable = withInstall(_TlTable);
export default TlTable;

export const TlTableColumn = withInstall(_TlColumn);

// 导出类型声明
export * from "./src/table";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlTable: typeof TlTable;
    TlTableColumn: typeof TlTableColumn;
  }
}
