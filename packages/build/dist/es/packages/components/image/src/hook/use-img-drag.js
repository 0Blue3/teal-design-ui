import { toRefs as p, ref as D, watch as g } from "vue";
const L = (m) => {
  const { imageEl: l, scale: o } = p(m), t = D([0, 0]);
  let n = !1, u, r, a = 0, s = 0;
  const d = (e) => {
    n = !0, e.preventDefault && e.preventDefault(), u = e.clientX, r = e.clientY, document.addEventListener("mousemove", v), document.addEventListener("mouseup", c);
  }, v = (e) => {
    if (n === !1) return;
    e.preventDefault && e.preventDefault();
    const f = (e.clientX - u) / o.value + a, i = (e.clientY - r) / o.value + s;
    t.value = [f, i];
  }, c = (e) => {
    n !== !1 && (e.preventDefault && e.preventDefault(), n = !1, a = t.value[0], s = t.value[1], document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", c));
  };
  return g(l, () => {
    l.value.addEventListener("mousedown", d);
  }), {
    translate: t,
    resetTranslate: () => {
      a = 0, s = 0, t.value = [a, s];
    }
  };
};
export {
  L as default
};
