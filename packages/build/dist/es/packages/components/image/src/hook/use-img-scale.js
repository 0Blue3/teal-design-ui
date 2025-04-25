import { toRefs as i, ref as v, watch as d } from "vue";
const E = (s) => {
  const { wrapperEl: n } = i(s), c = 0.1, l = 0.1, m = 10, e = v(1), o = (t = "zoomIn", a = c) => {
    const u = t === "zoomIn" ? a : -a;
    e.value += u, e.value = Math.min(Math.max(e.value, l), m);
  }, r = (t) => {
    t.deltaY > 0 ? o("zoomOut", 0.5) : t.deltaY < 0 && o("zoomIn", 0.5);
  };
  return d(n, () => {
    n.value && n.value.addEventListener("wheel", r);
  }), {
    scale: e,
    adjustZoom: o,
    resetScale: () => {
      e.value = 1;
    }
  };
};
export {
  E as default
};
