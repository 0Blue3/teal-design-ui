import { withInstall } from "@teal/utils";
import _Upload from "./src/upload.vue";

const Upload = withInstall(_Upload);
export default Upload;

// 导出类型声明
export * from "./src/upload";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlUpload: typeof Upload;
  }
}
