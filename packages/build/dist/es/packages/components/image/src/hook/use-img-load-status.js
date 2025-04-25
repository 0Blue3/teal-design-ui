import { ref as u, computed as o } from "vue";
const c = (l) => {
  const e = u("beforeLoad"), a = o(() => e.value === "beforeLoad"), t = o(() => e.value === "loading"), s = o(() => e.value === "error"), r = o(() => e.value === "loaded");
  return {
    status: e,
    isBeforeLoad: a,
    isLoading: t,
    isError: s,
    isLoaded: r,
    setLoadStatus: (d) => {
      e.value = d;
    }
  };
};
export {
  c as default
};
