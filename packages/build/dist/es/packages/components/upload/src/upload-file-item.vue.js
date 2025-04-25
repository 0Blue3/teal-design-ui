import { defineComponent as R, toRefs as w, computed as h, resolveComponent as N, createElementBlock as u, openBlock as s, normalizeClass as l, unref as e, createElementVNode as o, createVNode as B, toDisplayString as E, createBlock as f, createCommentVNode as c } from "vue";
import { getArcPath as U } from "./utils.js";
import { createNamespace as A } from "../../../utils/create.js";
import { generateUid as V } from "../../../utils/utils.js";
const j = {
  width: "14",
  height: "14"
}, P = ["d"], L = /* @__PURE__ */ R({
  __name: "upload-file-item",
  props: {
    progress: { default: 0 },
    fileContent: { default: () => ({
      status: "success",
      name: "",
      uid: V()
    }) },
    shape: {},
    avatar: { type: Boolean }
  },
  emits: ["handleAbort", "handleRemove", "handleReUpload"],
  setup(v, { emit: k }) {
    const m = v, t = A("upload__files-list-item"), { status: n, name: g, uid: i } = w(m.fileContent), r = k, x = h(() => b(g.value));
    h(() => Math.floor(m.progress) + "%");
    const _ = () => {
      r("handleAbort", i.value);
    }, C = () => {
      r("handleRemove", i.value);
    }, y = () => {
      r("handleReUpload", i.value);
    }, b = (p) => {
      var a;
      switch ((a = p.split(".").pop()) == null ? void 0 : a.toLowerCase()) {
        case "jpg":
        case "png":
        case "jpeg":
        case "gif":
          return "fa-file-image";
        case "pdf":
          return "fa-file-pdf";
        case "mp4":
        case "mkv":
          return "fa-file-video";
        case "doc":
        case "docx":
          return "fa-file-word";
        case "xls":
        case "xlsx":
          return "fa-file-excel";
        case "ppt":
        case "pptx":
          return "fa-file-powerpoint ";
        case "wmv":
        case "mp3":
          return "fa-file-audio ";
        case "txt":
          return "fa-file-lines ";
        default:
          return "fa-file";
      }
    };
    return (p, d) => {
      const a = N("tl-icon");
      return s(), u("div", {
        class: l(e(t).b())
      }, [
        o("div", {
          class: l(e(t).e("main"))
        }, [
          o("div", {
            class: l(e(t).e("main-left"))
          }, [
            B(a, {
              icon: x.value,
              class: "icon-annex"
            }, null, 8, ["icon"]),
            o("span", {
              class: l(e(t).em("main-left-name", e(n)))
            }, E(e(g)), 3)
          ], 2),
          o("div", {
            class: l(e(t).e("main-right"))
          }, [
            e(n) !== "uploading" ? (s(), f(a, {
              key: 0,
              class: "icon-delete",
              icon: "fa-trash-can",
              onClick: C
            })) : c("", !0),
            "success".includes(e(n)) ? (s(), f(a, {
              key: 1,
              class: "icon-success",
              icon: "fa-check "
            })) : c("", !0),
            ["error", "pause"].includes(e(n)) ? (s(), f(a, {
              key: 2,
              icon: "fa-upload",
              class: "icon-reupload",
              onClick: y
            })) : c("", !0),
            ["uploading"].includes(e(n)) ? (s(), u("div", {
              key: 3,
              class: "abort-upload",
              onClick: _
            }, [
              (s(), u("svg", j, [
                d[0] || (d[0] = o("circle", {
                  cx: "7",
                  cy: "7",
                  r: "7",
                  class: "uploading-bg",
                  "fill-opacity": "0.6"
                }, null, -1)),
                o("path", {
                  d: e(U)(7, 7, 7, p.progress),
                  class: "uploading-bg"
                }, null, 8, P)
              ]))
            ])) : c("", !0)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
export {
  L as default
};
