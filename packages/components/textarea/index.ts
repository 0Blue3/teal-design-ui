import { withInstall } from "@teal/utils";
import _Textarea from "./src/textarea.vue";

const TlTextarea = withInstall(_Textarea);
export default TlTextarea;

// 导出类型声明
export * from "./src/textarea";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlTextarea: typeof TlTextarea;
  }
}
