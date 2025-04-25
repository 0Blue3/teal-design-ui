const n = Object.prototype.toString;
function c(t) {
  return n.call(t) === "[object Object]";
}
function e(t) {
  return n.call(t) === "[object Array]";
}
function o(t) {
  return n.call(t) === "[object undefined]";
}
function r(t) {
  return n.call(t) === "[object function]";
}
export {
  e as isArray,
  r as isFunction,
  c as isObject,
  o as isUndefined
};
