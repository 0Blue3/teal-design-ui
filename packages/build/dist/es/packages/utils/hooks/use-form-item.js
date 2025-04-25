import { inject as y, computed as o } from "vue";
import { formItemContextKey as f } from "../../components/form/src/form.js";
const S = ({
  disabled: a,
  status: n,
  message: r,
  size: c
} = {}) => {
  const e = y(f, {}), l = o(() => e.validateInstance), v = o(
    () => (a == null ? void 0 : a.value) || e.disabled
  ), u = o(() => e.layout), i = o(() => (e == null ? void 0 : e.size) || (c == null ? void 0 : c.value)), d = o(() => {
    var t;
    return ((t = l.value) == null ? void 0 : t.isError) ?? !1;
  }), m = o(
    () => {
      var t;
      return ((t = l.value) == null ? void 0 : t.message) ?? (r == null ? void 0 : r.value);
    }
  ), p = o(
    () => {
      var t;
      return ((t = l.value) == null ? void 0 : t.status) ?? (n == null ? void 0 : n.value);
    }
  );
  return {
    formItemCtx: e,
    mergedDisabled: v,
    mergedMessage: m,
    isError: d,
    mergedStatus: p,
    mergedSize: i,
    layout: u,
    validate: (t) => {
      e != null && e.validate && e.validate(t);
    }
  };
};
export {
  S as useFormItem
};
