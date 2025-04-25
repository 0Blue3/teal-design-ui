/// <reference types="vite/client" />
declare module "lodash-es";
declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any; // 或者根据需要为特定元素添加更具体的类型声明
  }
}
