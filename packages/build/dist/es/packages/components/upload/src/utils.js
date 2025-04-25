import "vue";
import { generateUid as r } from "../../../utils/utils.js";
function c(t, e, n, o) {
  const i = o / 100 * Math.PI * 2, s = t + n * Math.sin(i), u = e - n * Math.cos(i);
  return `M${t},${e} L${t},${e - n} A${n},${n} 0 ${i < Math.PI ? "0" : "1"},1 ${s},${u} Z`;
}
function f(t) {
  return t.map((n) => ({ uid: r(), status: "success", ...n }));
}
function $(t, e) {
  return e.findIndex((n) => t === n.uid);
}
function l(t, e) {
  return new File([t], e, { type: t.type });
}
export {
  l as blobToFile,
  $ as findFileByUid,
  f as generateListUid,
  c as getArcPath
};
