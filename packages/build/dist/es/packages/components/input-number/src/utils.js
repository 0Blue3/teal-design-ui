const c = (t, r, i) => {
  if (Number.isInteger(t) && Number.isInteger(r)) {
    const g = t + r;
    if (i === 0)
      return g;
  }
  const e = t.toString().split(".")[1] ?? "", n = r.toString().split(".")[1] ?? "", s = 10 ** Math.max(e.length ?? 0, n.length ?? 0);
  return (t * s + r * s) / s;
}, m = (t, r) => {
  if (!t || Number.isNaN(t)) return 0;
  const i = t.toString().split("."), e = i[0];
  let n = i[1] ?? "";
  return n.length > r ? (n = n.slice(0, r), +`${e}.${n}`) : t;
}, u = /[-]?(\d*\.\d+|\d+\.\d|\d+)/;
export {
  c as calculate,
  m as normalizeNumber,
  u as numberMatchReg
};
