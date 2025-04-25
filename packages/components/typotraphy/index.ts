import { withInstall } from "@teal/utils";
import _Title from "./src/title.vue";
import _Text from "./src/text.vue";
import _paragraph from "./src/paragraph.vue";

export const TlTitle = withInstall(_Title);
export const TlText = withInstall(_Text);
export const TlParagraph = withInstall(_paragraph);

// 导出类型声明
export * from "./src/title.vue";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlTitle: typeof TlTitle;
    TlText: typeof TlText;
    TlParagraph: typeof TlParagraph;
  }
}
