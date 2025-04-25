import { ref as a } from "vue";
const u = (e, r, s) => {
  const t = a(e);
  return e !== void 0 ? t.value = e : t.value = r, [t, (o) => {
    t.value = o, s == null || s(o);
  }];
};
export {
  u as default
};
