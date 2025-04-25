import { defineComponent as h, ref as _, resolveComponent as v, createElementBlock as D, openBlock as b, withModifiers as c, normalizeClass as o, unref as l, createVNode as C, createElementVNode as d, toDisplayString as k } from "vue";
import { createNamespace as y } from "../../../utils/create.js";
const U = /* @__PURE__ */ h({
  __name: "upload-draggle",
  props: {
    desc: { default: "" },
    disabled: { type: Boolean, default: !1 },
    accept: { default: "*" }
  },
  emits: ["handleUpload", "handleDraggleFiles"],
  setup(p, { emit: i }) {
    const e = y("upload__files-draggle"), s = p, n = i, t = _(!1), f = (a) => {
      if (s.disabled) return;
      t.value = !1, a.stopPropagation();
      const r = Array.from(a.dataTransfer.files);
      n("handleDraggleFiles", r);
    }, m = () => {
      s.disabled || (t.value = !0);
    }, u = () => {
      n("handleUpload");
    };
    return (a, r) => {
      const g = v("tl-icon");
      return b(), D("div", {
        class: o(l(e).b()),
        onDrop: c(f, ["prevent"]),
        onDragover: c(m, ["prevent"]),
        onClick: u
      }, [
        C(g, {
          class: o(l(e).e("icon-upload")),
          icon: "fa-cloud-arrow-up"
        }, null, 8, ["class"]),
        d("span", {
          class: o(l(e).e("methods"))
        }, "单击或拖动文件到此区域进行上传", 2),
        d("span", {
          class: o(l(e).e("desc"))
        }, k(a.desc), 3)
      ], 34);
    };
  }
});
export {
  U as default
};
