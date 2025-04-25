import { withInstall } from "@teal/utils";
import _Slider from "./src/slider.vue";

const TlSlider = withInstall(_Slider);
export default TlSlider;

// 导出类型声明
export * from "./src/slider";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlSlider: typeof TlSlider;
  }
}
