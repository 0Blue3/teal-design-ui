const s = (e) => (e * 100).toFixed(0) + "%", i = (e) => e ? typeof e == "string" ? document.querySelector(e) : e : document.body, u = (e, r) => {
  const n = {};
  for (const t of r)
    t in e && e[t] && (n[t] = e[t]);
  return n;
}, c = (e) => {
  if (e === void 0) return;
  if (typeof e == "string" && /^\d+(%)$/.test(e)) return e;
  const r = parseInt(e, 10);
  return typeof r == "number" ? `${r}px` : void 0;
}, f = {
  mounted(e, r) {
    const n = new IntersectionObserver((t) => {
      t[0].isIntersecting ? r.value(!0) : r.value(!1);
    });
    n.observe(e), e._observer = n;
  },
  unmounted(e) {
    e._observer && (e._observer.disconnect(), delete e._observer);
  }
};
export {
  s as formatePercentage,
  i as getPopupContainer,
  c as normalizeImageSizeProp,
  u as pick,
  f as vObserveVisibility
};
