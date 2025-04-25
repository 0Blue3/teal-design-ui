import { defineComponent as w, toRefs as P, ref as h, computed as A, resolveComponent as k, createElementBlock as i, openBlock as l, normalizeClass as t, unref as e, createCommentVNode as s, createElementVNode as L, createBlock as R, createVNode as c } from "vue";
import { createNamespace as j } from "../../../utils/create.js";
import { generateUid as z } from "../../../utils/utils.js";
const M = ["src"], G = /* @__PURE__ */ w({
  __name: "upload-picture-item",
  props: {
    progress: { default: 0 },
    fileContent: { default: () => ({
      status: "success",
      name: "",
      uid: z(),
      avatar: !1
    }) },
    shape: { default: "default" },
    avatar: { type: Boolean }
  },
  emits: [
    "handleAbort",
    "handleRemove",
    "handleReUpload",
    "handleEdit",
    "handleReview"
  ],
  setup(C, { emit: b }) {
    const o = j("upload__picture-item"), y = C, u = b, { status: n, uid: d, raw: p, url: v } = P(y.fileContent), _ = h(!1), U = h(), m = A(() => p != null && p.value ? URL.createObjectURL(p.value) : ""), g = () => {
      u("handleReview", d.value);
    }, B = () => {
      u("handleAbort", d.value);
    }, f = () => {
      u("handleRemove", d.value);
    }, E = () => {
      u("handleReUpload", d.value);
    }, N = () => {
      _.value = !0;
    };
    return (r, O) => {
      const a = k("tl-icon"), V = k("cropPicture");
      return l(), i("div", {
        class: t([e(o).b(), e(o).m(r.shape)])
      }, [
        m.value || e(v) ? (l(), i("img", {
          key: 0,
          src: e(v) || m.value,
          alt: ""
        }, null, 8, M)) : s("", !0),
        L("div", {
          class: t([
            e(o).e("overlay-hover"),
            e(o).em("overlay-hover", e(n)),
            e(n) === "uploading" && e(o).em("overlay-hover", "uploading")
          ])
        }, null, 2),
        e(n) === "uploading" ? (l(), R(a, {
          key: 1,
          class: t([e(o).e("icon-uploading"), e(o).e("icon")]),
          onClick: B,
          icon: "fa-circle "
        }, null, 8, ["class"])) : s("", !0),
        ["error", "pause"].includes(e(n)) ? (l(), R(a, {
          key: 2,
          class: t([e(o).e("icon-fail"), e(o).e("icon")]),
          icon: "fa-file-excel "
        }, null, 8, ["class"])) : s("", !0),
        ["error", "pause"].includes(e(n)) ? (l(), i("div", {
          key: 3,
          class: t(e(o).e("hover-icons"))
        }, [
          c(a, {
            icon: "fa-upload ",
            onClick: E
          }),
          c(a, {
            icon: "fa-trash-can",
            onClick: f
          })
        ], 2)) : s("", !0),
        e(n) === "success" && !r.avatar ? (l(), i("div", {
          key: 4,
          class: t(e(o).e("hover-icons"))
        }, [
          c(a, {
            icon: "fa-eye ",
            onClick: g
          }),
          c(a, {
            icon: "fa-trash-can",
            onClick: f
          })
        ], 2)) : s("", !0),
        e(n) === "success" && r.avatar ? (l(), i("div", {
          key: 5,
          class: t(e(o).e("hover-icons"))
        }, [
          c(a, {
            icon: "fa-pen-clip",
            onClick: N
          }),
          c(a, {
            icon: "fa-trash-can",
            onClick: f
          })
        ], 2)) : s("", !0),
        c(V, {
          ref_key: "cropRef",
          ref: U,
          "file-content": r.fileContent
        }, null, 8, ["file-content"])
      ], 2);
    };
  }
});
export {
  G as default
};
