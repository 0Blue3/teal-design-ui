const t = {
  type: {
    type: String,
    default: "default"
  },
  align: {
    type: String,
    default: "left"
  },
  property: String,
  label: String,
  formatter: Function
}, e = Symbol("TableContextKey");
export {
  e as TableContextKey,
  t as defaultTableColumnProps
};
