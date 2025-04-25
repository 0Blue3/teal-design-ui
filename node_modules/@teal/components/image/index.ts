import { withInstall } from "@teal/utils";
import _Image from "./src/image.vue";
import _ImagePreview from "./src/preview.vue";
import _ImagePreviewGroup from "./src/preview-group.vue";

const TlImage = withInstall(_Image);
export default TlImage;
export const TlImagePreview = withInstall(_ImagePreview);
export const TlImagePreviewGroup = withInstall(_ImagePreviewGroup);

// 导出类型声明
export * from "./src/image";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlImage: typeof TlImage;
    TlImagePreview: typeof TlImagePreview;
    TlImagePreviewGroup: typeof TlImagePreviewGroup;
  }
}
