import { withInstall } from "@teal/utils";
import _Form from "./src/form.vue";
import _FormItem from "./src/form-item.vue";

const TlForm = withInstall(_Form);
export default TlForm;
export const TlFormItem = withInstall(_FormItem);

// 导出类型声明
export * from "./src/form";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlForm: typeof TlForm;
    TlFormItem: typeof TlFormItem;
  }
}
