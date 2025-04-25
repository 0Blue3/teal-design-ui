function c(n, b, $, o) {
  return b && (n += `-${b}`), $ && (n += `__${$}`), o && (n += `--${o}`), n;
}
function u(n) {
  return {
    b: (t = "") => c(n, t, "", ""),
    e: (t = "") => t ? c(n, "", t, "") : "",
    m: (t = "") => t ? c(n, "", "", t) : "",
    be: (t = "", s = "") => t && s ? c(n, t, s, "") : "",
    bm: (t = "", s = "") => t && s ? c(n, t, "", s) : "",
    em: (t = "", s = "") => t && s ? c(n, "", t, s) : "",
    bem: (t = "", s = "", _ = "") => t && s && _ ? c(n, t, s, _) : "",
    is: (t, s) => s ? `is-${t}` : ""
  };
}
function j(n) {
  const b = `t-${n}`;
  return u(b);
}
export {
  j as createNamespace
};
