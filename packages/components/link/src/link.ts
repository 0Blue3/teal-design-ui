import { ExtractPropTypes, PropType, type Ref } from "vue";

export const linkProps = {
  newtab: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "/",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type LinkProps = Partial<ExtractPropTypes<typeof linkProps>>;
