import { isObject as f, isArray as i } from "./is.js";
let c = 2e3;
const p = {
  nextIndex() {
    return c++;
  }
};
function m(n, o, r = !1) {
  let e;
  return {
    execute: (...u) => {
      e && clearTimeout(e), r && !e && n(...u), e = setTimeout(() => {
        r || n(...u), e = null;
      }, o);
    },
    cancel: () => {
      e && (clearTimeout(e), e = null);
    }
  };
}
const b = (n) => typeof n == "number" ? `${n}px` : n, x = (n) => typeof n == "boolean" ? n : !!n.toString();
function l(n, o = /* @__PURE__ */ new WeakMap()) {
  if (!f(n) && !i(n))
    return n;
  if (o.has(n))
    return o.get(n);
  if (o.set(n, n), i(n))
    n = n.map((r) => l(r, o));
  else {
    const r = {};
    n = Object.keys(n).reduce(
      (e, t) => (e[t] = l(n[t], o), e),
      r
    );
  }
  return n;
}
function a() {
  const n = Math.floor(Math.random() * 1e4), o = Date.now();
  return parseInt(`${n}${o}`, 10);
}
export {
  m as debounce,
  l as deepClone,
  a as generateUid,
  p as popupManager,
  x as toBoolean,
  b as toPx
};
