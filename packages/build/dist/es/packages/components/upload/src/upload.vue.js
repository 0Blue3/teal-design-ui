import { defineComponent as F, ref as f, reactive as ee, computed as C, getCurrentInstance as te, resolveComponent as w, createElementBlock as c, openBlock as s, normalizeClass as u, unref as o, createElementVNode as H, createCommentVNode as m, createBlock as B, withModifiers as ae, createVNode as h, withCtx as E, createTextVNode as le, toDisplayString as I, Fragment as x, renderList as M } from "vue";
import { UploadRequest as ne } from "./ajax.js";
import { createNamespace as se } from "../../../utils/create.js";
import { generateUid as A } from "../../../utils/utils.js";
import { ImageTypes as oe } from "./upload.js";
import { generateListUid as re, findFileByUid as i, blobToFile as ue } from "./utils.js";
import ce from "./upload-picture-item.vue.js";
import ie from "./upload-file-item.vue.js";
import de from "./upload-draggle.vue.js";
const pe = ["accept", "multiple"], Re = /* @__PURE__ */ F({
  name: "tl-upload",
  __name: "upload",
  props: {
    accept: { default: "*" },
    maxSize: { default: 3 * 1024 * 1024 },
    multiple: { type: Boolean, default: !0 },
    limit: { default: 0 },
    uploadUrl: { default: "" },
    shape: { default: "default" },
    fileList: { default: () => [] },
    desc: { default: "" },
    avatar: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !1 }
  },
  emits: [
    "handleSuccess",
    "handleDelete",
    "handleError",
    "handleBeforeUpload"
  ],
  setup(P, { emit: T }) {
    const n = se("upload"), r = P, b = T, y = f(!1), $ = f(!1);
    f();
    const q = f(!1), k = ee({
      name: "",
      url: "",
      uid: A(),
      status: "uploading"
    }), O = f(0), a = f(re(r.fileList)), L = f(), N = /* @__PURE__ */ new Map(), R = C(() => a.value.length);
    C(() => a.value.map((t) => t.raw ? URL.createObjectURL(t.raw) : t.url));
    const v = C(() => !!r.limit && R.value >= r.limit);
    y.value = oe.some((e) => r.accept.includes(e)) || r.avatar;
    const { proxy: fe } = te(), j = (e, t) => {
      console.log("success");
      const l = i(e, a.value);
      a.value[l].status = "success", b("handleSuccess", t, a.value);
    }, G = (e, t) => {
      const l = i(e, a.value);
      a.value[l].progress = t;
    }, J = (e, t) => {
      console.log(t, "error");
      const l = i(e, a.value);
      a.value[l].status = "error", b("handleError", t, a.value);
    }, U = async () => {
      var e;
      v.value || (e = L.value) == null || e.click();
    }, S = (e) => (b("handleBeforeUpload", e), !(r.maxSize && e.size > r.maxSize || r.limit && r.limit <= R.value)), K = (e) => {
      const t = Array.from(e.target.files);
      if (t.length) {
        if (r.avatar) {
          S(t[0]), Q(t[0]);
          return;
        }
        t.forEach((l) => {
          const d = S(l);
          l && d && g(l);
        }), e.target.value = "";
      }
    }, g = async (e) => {
      const t = e == null ? void 0 : e.name;
      if (!t)
        return;
      const l = A();
      a.value.push({
        name: t,
        status: "uploading",
        raw: e,
        uid: l
      });
      const d = {
        uid: l,
        uploadUrl: r.uploadUrl,
        selectedFile: e,
        fileName: t,
        onSuccess: j,
        onError: J,
        onProgress: G
      };
      N.set(l, ne(d));
    }, Q = (e) => {
      a.value = [];
      const t = e == null ? void 0 : e.name;
      if (!t) {
        console.log("error");
        return;
      }
      const l = A();
      k.name = t, k.raw = e, k.uid = l, q.value = !0, g(e);
    }, z = (e) => {
      const t = i(e, a.value), l = N.get(e);
      l != null && l.abort && (l.abort(), a.value[t].status = "pause");
    }, D = (e) => {
      b("handleDelete", [i(e, a.value), a.value]), a.value.splice(i(e, a.value), 1);
    }, V = (e) => {
      const t = i(e, a.value), l = a.value[t].raw;
      a.value.splice(t, 1), g(l);
    }, W = (e, t) => {
      const l = i(t, a.value), d = a.value[l].name;
      a.value.splice(i(t, a.value), 1);
      const _ = ue(e, d);
      g(_);
    }, X = (e) => {
      const t = i(e, a.value);
      O.value = t, $.value = !0;
    }, Y = (e) => {
      e.forEach((t) => {
        g(t);
      });
    };
    return (e, t) => {
      const l = w("tl-icon"), d = w("tl-button"), _ = w("tl-text"), Z = w("tl-space");
      return s(), c("div", {
        class: u(o(n).b())
      }, [
        H("input", {
          ref_key: "inputRef",
          ref: L,
          style: { display: "none" },
          accept: e.accept,
          multiple: e.multiple,
          type: "file",
          onChange: K,
          onClick: t[0] || (t[0] = ae(() => {
          }, ["stop"]))
        }, null, 40, pe),
        y.value ? m("", !0) : (s(), c("div", {
          key: 0,
          class: u(o(n).e("files"))
        }, [
          e.draggable ? m("", !0) : (s(), c("div", {
            key: 0,
            class: u(o(n).e("files-file"))
          }, [
            h(d, {
              class: u(o(n).e("files-file-button")),
              type: "secondary",
              disabled: v.value,
              onClick: U
            }, {
              default: E(() => [
                h(l, { icon: "fa-upload " }),
                t[1] || (t[1] = H("span", null, "上传文件", -1))
              ]),
              _: 1
            }, 8, ["class", "disabled"]),
            h(_, { type: "third" }, {
              default: E(() => [
                le(I(e.desc), 1)
              ]),
              _: 1
            })
          ], 2)),
          e.draggable ? (s(), c("div", {
            key: 1,
            class: u(o(n).e("files-draggle-wrapper"))
          }, [
            h(de, {
              desc: e.desc,
              disabled: v.value,
              accept: e.accept,
              onHandleUpload: U,
              onHandleDraggleFiles: Y
            }, null, 8, ["desc", "disabled", "accept"])
          ], 2)) : m("", !0),
          a.value.length ? (s(), c("div", {
            key: 2,
            class: u(o(n).e("files-list"))
          }, [
            (s(!0), c(x, null, M(a.value, (p) => (s(), B(ie, {
              key: p.uid,
              "file-content": p,
              progress: p.progress,
              onHandleRemove: D,
              onHandleReUpload: V,
              onHandleAbort: z
            }, null, 8, ["file-content", "progress"]))), 128))
          ], 2)) : m("", !0)
        ], 2)),
        y.value && !e.draggable ? (s(), B(Z, {
          key: 1,
          wrap: "",
          size: 8
        }, {
          default: E(() => [
            (s(!0), c(x, null, M(a.value, (p) => (s(), c("span", {
              class: u(o(n).e("picture"))
            }, [
              (s(), B(ce, {
                key: p.uid,
                "file-content": p,
                "is-picture": y.value,
                progress: p.progress,
                shape: e.shape,
                avatar: e.avatar,
                onHandleRemove: D,
                onHandleReUpload: V,
                onHandleUpload: U,
                onHandleAbort: z,
                onHandleEdit: W,
                onHandleReview: X
              }, null, 8, ["file-content", "is-picture", "progress", "shape", "avatar"]))
            ], 2))), 256)),
            !(e.avatar && R.value) && !v.value ? (s(), c("div", {
              key: 0,
              class: u([
                o(n).e("picture-button"),
                o(n).is("disabled", v.value),
                o(n).em("picture-button", e.shape)
              ]),
              onClick: U
            }, [
              H("div", {
                class: u(o(n).e("picture-desc"))
              }, [
                h(l, {
                  icon: "fa-plus",
                  class: u(o(n).e("picture-button-icon"))
                }, null, 8, ["class"]),
                e.desc ? (s(), c("span", {
                  key: 0,
                  class: u(o(n).e("picture-button-desc"))
                }, I(e.desc), 3)) : m("", !0)
              ], 2)
            ], 2)) : m("", !0)
          ]),
          _: 1
        })) : m("", !0)
      ], 2);
    };
  }
});
export {
  Re as default
};
