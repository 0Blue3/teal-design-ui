import { isObject, isArray, isString, isUndefined } from "./is";

let zIndex = 2000;

export const popupManager = {
  nextIndex() {
    return zIndex++;
  },
};

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
  immediate: boolean = false
): { execute: T; cancel: () => void } {
  let timer: NodeJS.Timeout | null;

  const debounced: (...args: Parameters<T>) => void = (...args) => {
    if (timer) clearTimeout(timer);
    if (immediate && !timer) func(...args);

    timer = setTimeout(() => {
      if (!immediate) func(...args);
      timer = null;
    }, delay);
  };

  const cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return {
    execute: debounced as T,
    cancel,
  };
}

export const toPx = (px?: string | number) => {
  if (typeof px === "number") return `${px}px`;
  return px;
};

export const toBoolean = (v: number | string | boolean) => {
  if (typeof v === "boolean") return v;
  return !!v.toString();
};

//头像大小
export const getSize = (size: number | string): number => {
  if (typeof size === "number") {
    return size;
  }
  switch (size) {
    case "s":
      return 20;
    case "m":
      return 40;
    case "l":
      return 60;
    default:
      return 40;
  }
};

//圆角大小
export const getShape = (shape: number | string): number => {
  if (typeof shape === "number") {
    return shape;
  }
  switch (shape) {
    case "circle":
      return 200;
    case "square":
      return 8;
    default:
      return 200;
  }
};

/**
 * 深拷贝
 * @param target
 * @param caches
 * @returns
 */
export function deepClone(target: unknown, caches = new WeakMap()) {
  if (!isObject(target) && !isArray(target)) {
    return target;
  }
  if (caches.has(target)) {
    return caches.get(target);
  }
  caches.set(target, target);

  if (isArray(target)) {
    target = target.map((item) => deepClone(item, caches));
  } else {
    const cloneObj = {};
    target = Object.keys(target).reduce(
      (acc: Record<any, any>, key: string) => {
        acc[key] = deepClone((target as any)[key], caches);
        return acc;
      },
      cloneObj
    );
  }
  return target;
}
/**
 * 解析对象路径 'a.[1].b' ==> ['a', 1, 'b']
 * @param path
 * @returns
 */
export function parsePath(path: string): (string | number)[] {
  return path.split(".").flatMap((part) => {
    // 处理数组索引
    const match = part.match(/(\w+)\[(\d+)\]/);
    if (match) {
      const [, key, indexStr] = match;
      const index = parseInt(indexStr, 10);
      return [key, index];
    }
    return part;
  });
}

/** 生成唯一ID */
export function generateUid() {
  const randomPart = Math.floor(Math.random() * 10000); // 生成 0-9999 之间的随机数
  const timestampPart = Date.now(); // 获取当前时间戳
  return parseInt(`${randomPart}${timestampPart}`, 10); // 将随机数和时间戳拼接为一个整数类型的 UID
}

/**
 * 设置对象属性by path
 * @param obj
 * @param path
 * @param value
 * @returns
 */
export function setObjByPath(
  obj: object,
  path: string | string[],
  value = undefined
) {
  // 将路径转换为数组
  const keys = isString(path) ? parsePath(path) : path;

  // 遍历路径并创建缺失的属性
  let current: any = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === undefined) {
      current[key] = {};
    }
    current = current[key];
  }

  // 设置最终值
  current[keys[keys.length - 1]] = value;
  return obj;
}

/**
 * 获取对象属性by path
 * @param obj
 * @param path
 * @param value
 * @returns
 */
export function getObjByPath(
  obj: Record<string, any>,
  path: string | string[],
  value = undefined
): any {
  // 将路径转换为数组
  const keys = isString(path) ? parsePath(path) : path;

  // 遍历路径
  for (const key of keys) {
    if (isUndefined(obj)) return value;
    obj = obj[key];
  }

  return obj;
}

/**
 *获取对象属性by path
 * @param obj
 * @param path
 * @param defaultVal
 * @returns
 */
export function getObjVal(
  obj: object,
  path: string | string[],
  defaultVal?: any
) {
  return {
    get value() {
      return getObjByPath(obj, path, defaultVal);
    },
    set value(val: any) {
      setObjByPath(obj, path, val);
    },
  };
}
