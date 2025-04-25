import { onMounted as c, onUnmounted as i } from "vue";
const d = (n, o) => {
  const e = (t) => {
    n.value && t.target && (n.value.contains(t.target) || o(t));
  };
  c(() => {
    document.addEventListener("click", e);
  }), i(() => {
    document.removeEventListener("click", e);
  });
};
export {
  d as useClickOutside
};
