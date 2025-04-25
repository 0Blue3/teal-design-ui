import { ref as B, nextTick as z } from "vue";
const E = (l) => l <= 0 ? 0 : l >= 100 ? 100 : l, C = (l, X, s, d, r, m, Y) => {
  let o = 0, h = null, c = 0;
  const a = B(!0), v = B(!1), f = (n) => {
    z(() => {
      let t = Math.round(
        d.value / s.value * 100
      ), e = Math.round(
        r.value / s.value * 100
      );
      t = E(t), e = E(e);
      const i = l.max - l.min, V = i * t / 100 + l.min, g = i * e / 100 + l.min, k = m.value ? [V, g] : g;
      Y(n, k);
    });
  }, u = (n) => {
    let t = d.value, e = r.value;
    if (m.value) {
      if (a.value ? (e = n >= o ? o : n, e = e <= 0 ? 0 : e) : (t = n >= o ? o : n, t = t <= 0 ? 0 : t), t >= e) {
        const i = t;
        t = e, e = i, a.value = !a.value;
      }
    } else
      e = n >= o ? o : n, e = e <= 0 ? 0 : e;
    d.value = t, r.value = e, f("update:modelValue");
  }, w = (n) => {
    const t = h;
    if (l.direction === "horizontal")
      if (n.clientX >= t.left && n.clientX <= t.right) {
        const e = n.clientX - t.left, i = Math.round(e / c) * c;
        u(i);
      } else {
        const e = n.clientX < t.left ? -9999 : 9999;
        u(e);
      }
    else if (l.direction === "vertical")
      if (n.clientY >= t.top && n.clientY <= t.bottom) {
        const e = t.bottom - n.clientY, i = Math.round(e / c) * c;
        u(i);
      } else {
        const e = n.clientY < t.top ? 9999 : -9999;
        u(e);
      }
  }, M = () => {
    v.value = !0, o = s.value, window.addEventListener("mousemove", w), window.addEventListener("mouseup", L), h = X.value.getBoundingClientRect(), (l.direction === "horizontal" || l.direction === "vertical") && (c = o * l.step / 100);
  }, x = () => {
    l.disabled || (M(), a.value = !1);
  }, S = () => {
    l.disabled || (M(), a.value = !0);
  }, L = () => {
    v.value = !1, window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", L), f("change");
  };
  return {
    isEndBtn: a,
    moving: v,
    handleStartMouseDown: x,
    handleEndMouseDown: S,
    emitValue: f
  };
};
export {
  C as useSlider
};
