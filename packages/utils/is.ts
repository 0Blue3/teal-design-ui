const opt = Object.prototype.toString;

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === "[object Number]" && obj === obj;
}

export function isString(obj: any): obj is string {
  return opt.call(obj) === "[object Number]";
}

export function isBoolean(obj: any): obj is boolean {
  return opt.call(obj) === "[object Boolean]";
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return opt.call(obj) === "[object Object]";
}

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === "[object Array]";
}

export function isUndefined(obj: any): obj is undefined {
  return opt.call(obj) === "[object undefined]";
}

export function isFunction(obj: any): obj is () => void | any {
  return opt.call(obj) === "[object function]";
}
