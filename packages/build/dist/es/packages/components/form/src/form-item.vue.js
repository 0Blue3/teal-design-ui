import { defineComponent, inject, reactive, computed, ref, onMounted, onBeforeMount, provide, createElementBlock, openBlock, normalizeClass, unref, createElementVNode, normalizeStyle, toDisplayString, renderSlot, createVNode, Transition, withCtx, createCommentVNode } from "vue";
import { formContextKey, formItemContextKey } from "./form.js";
import { createNamespace } from "../../../utils/create.js";
import { deepClone } from "../../../utils/utils.js";
import { isArray } from "../../../utils/is.js";
import Schema from "../../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js";
import isNil from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "tl-form-item",
  __name: "form-item",
  props: {
    field: {},
    labelWidth: { default: 116 },
    label: {},
    required: { type: Boolean },
    rules: {},
    disabled: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const bem = createNamespace("formItem"), formContext = inject(formContextKey, {}), props = __props, validateStatus = reactive({
      status: "primary",
      loading: !1,
      isError: !1,
      message: ""
    }), propVal = computed(() => {
      const model = formContext == null ? void 0 : formContext.model;
      let value = eval(`model.${props.field}`);
      return model && props.field && !isNil(value) ? value : null;
    }), computedDisabled = computed(() => props.disabled || formContext.disabled), mergedLabelWidth = computed(() => (formContext == null ? void 0 : formContext.labelWidth) ?? props.labelWidth), mergedRules = computed(() => {
      var t;
      const e = [];
      if (props.rules && e.push(...props.rules), props.field && formContext.rules) {
        const r = ((t = formContext.rules) == null ? void 0 : t[props.field]) ?? [];
        e.push(...r);
      }
      return props.required && e.push({ required: !0 }), e;
    }), mergedSize = computed(() => formContext.size || "m"), layout = computed(() => formContext.layout || "horizontal"), getTriggeredRules = (e) => {
      let t = mergedRules.value;
      return e ? t ? t.filter((r) => isArray(r.trigger) ? r.trigger.includes(e) : r.trigger === e) : [] : t;
    }, validateField = (e) => {
      const t = getTriggeredRules(e);
      if (!props.field || t.length === 0) return Promise.resolve();
      const r = props.field, l = propVal.value, s = new Schema({
        [r]: t
      });
      return validateStatus.loading = !0, s.validate({
        [r]: l
      }).then(() => (validateStatus.isError = !1, validateStatus.status = "success", validateStatus.message = "", Promise.resolve())).catch((a) => {
        const { errors: o } = a;
        return validateStatus.isError = !0, validateStatus.status = "error", validateStatus.message = o && o.length > 0 && o[0].message || "", Promise.resolve(a);
      }).finally(() => {
        validateStatus.loading = !1;
      });
    }, resetValidate = () => {
      props.field && (validateStatus.isError = !1, validateStatus.loading = !1, validateStatus.status = "primary", validateStatus.message = "");
    }, resetField = () => {
      var t;
      resetValidate();
      const e = formContext == null ? void 0 : formContext.model;
      e && props.field && !isNil(e[props.field]) && (e[props.field] = (t = formItemInfo.value) == null ? void 0 : t.initValue);
    };
    let formItemInfo = ref();
    return onMounted(() => {
      var e;
      props.field && (formItemInfo.value = reactive({
        field: props.field,
        disabled: computedDisabled,
        validateInstance: validateStatus,
        rules: mergedRules,
        initValue: deepClone(propVal.value),
        validate: validateField,
        resetValidate,
        resetField
      }), (e = formContext.addField) == null || e.call(formContext, formItemInfo.value));
    }), onBeforeMount(() => {
      var e;
      (e = formContext.removeField) == null || e.call(formContext, props.field);
    }), __expose(formItemInfo.value), provide(
      formItemContextKey,
      reactive({
        size: mergedSize,
        layout,
        validateInstance: validateStatus,
        disabled: computedDisabled.value,
        validate: validateField
      })
    ), (e, t) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(bem).b(), unref(bem).m(layout.value)])
    }, [
      createElementVNode("div", {
        class: normalizeClass([unref(bem).e("label"), unref(bem).is("required", e.required ?? !1)]),
        style: normalizeStyle({ width: `${mergedLabelWidth.value}px` })
      }, toDisplayString(e.label), 7),
      createElementVNode("div", {
        class: normalizeClass(unref(bem).e("field"))
      }, [
        renderSlot(e.$slots, "default"),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            validateStatus.isError ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(bem).e("field__extra"))
            }, toDisplayString(validateStatus.message), 3)) : createCommentVNode("", !0)
          ]),
          _: 1
        })
      ], 2)
    ], 2));
  }
});
export {
  _sfc_main as default
};
