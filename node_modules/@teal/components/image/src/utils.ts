import { DirectiveBinding, ObjectDirective } from "vue";
import { DirectiveHTMLDivElement } from "./image";

/** 避免浮点数计算误差问题 */
export const formatePercentage = (scale: number) => {
  return (scale * 100).toFixed(0) + "%";
};
/** 获取挂载 */
export const getPopupContainer = (
  popupContainer?: string | HTMLElement
): HTMLElement => {
  if (popupContainer) {
    if (typeof popupContainer === "string")
      return document.querySelector(popupContainer) as HTMLElement;
    return popupContainer;
  }
  return document.body;
};

/** 交集，返回新的对象 */
export const pick = <T extends Record<any, any>, K extends keyof T>(
  object: T,
  path: Array<K>
): Pick<T, K> => {
  const result: any = {};

  for (const item of path) {
    if (item in object && object[item]) {
      result[item] = object[item];
    }
  }

  return result;
};

/** 规格化图像大小比例 */
export const normalizeImageSizeProp = (size?: string | number) => {
  if (size === undefined) return undefined;
  // 百分比
  if (typeof size === "string" && /^\d+(%)$/.test(size)) return size;

  // 数字
  const num = parseInt(size as string, 10);
  return typeof num === "number" ? `${num}px` : undefined;
};

/**
 * 自定义命令（v-observe-visibility）
 * 检查元素是否出现在可视窗口范围内。
 */
export const vObserveVisibility: ObjectDirective = {
  mounted(el: DirectiveHTMLDivElement, binding: DirectiveBinding) {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // 当元素进入视口时触发回调
      if (entry.isIntersecting) {
        binding.value(true);
      } else {
        binding.value(false);
      }
    });

    // 开始监听元素
    observer.observe(el);

    // 存储观察者对象
    el._observer = observer;
  },
  unmounted(el: DirectiveHTMLDivElement) {
    // 停止观察并清理资源
    if (el._observer) {
      el._observer.disconnect();
      delete el._observer;
    }
  },
};
