import type { Component, App } from "vue";
import TlUpload from "./upload";
import TlRadio, { TlRadioGroup } from "./radio";
import TlCheckbox, { TlCheckboxGroup } from "./checkbox";
import TlAnchor from "./anchor";
// import Popover from "../popover";
import TlSwitch from "./switch";
// import { TlDrawer } from "../drawer";
import TlTable, { TlTableColumn } from "./table";
import TlBreadcrumb, { TlBreadcrumbItem } from "./bread-crumb";
import TlBadge from "./badge";
import TlScrollbar from "./scrollbar";
import TlRate from "./rate";
// import Affix from "../affix";
import TlInput from "./input";
// import InputSearch from "../inputsearch";
import TlTree from "./tree";
// import TreeSelect from "../tree-select";
import TlSlider from "./slider";
import TlCollapse, { TlCollapseGroup } from "./collapse";
// import Popconfirm from "../popconfirm";
import TlInputNumber from "./input-number";
// import { Tabs, TlTabPane } from "../tabs";
import TlForm, { TlFormItem } from "./form";
// import TlInputTag from "../input-tag";
import TlPagination from "./pagination";
import TlTextArea from "./textarea";
// import Tag from "../tag";
// import Calendar, { CalendarMin } from "../calendar";
// import TlSkeleton from "../skeleton";
import TlDivider from "./divider";
import TlLink from "./link";
// import Alert from "../alert";
import TlButton from "./button";
// import Theme from "../theme";
import TlAvatar, { TlAvatarGroup } from "./avatar";
import TlSpace from "./space";
// import { TlTimeline, TlTimelineItem } from "../timeline";
// import TlMessage from "../message";
// import TlNotification from "../notification";
import { TlParagraph, TlTitle, TlText } from "./typotraphy";
// import { TlBackTop } from "../back-top";
import TlTooltip from "./tooltip";
import TlEmpty from "./empty";
// import TlProgress from "../progress";
// import TlModal from "../modal";
import TlDropdown, { TlDropdownItem } from "./dropdown";
import TlImage, { TlImagePreview, TlImagePreviewGroup } from "./image";
// import Spinner from "./spinner";
// import TimePicker from "../time-picker";
// import { vLoading } from "./spinner/src/directive";
const components: {
  [propName: string]: Component;
} = {
  TlUpload,
  TlRadioGroup,
  TlRadio,
  TlCheckbox,
  TlCheckboxGroup,
  TlSwitch,
  TlAnchor,
  //   Popover,
  //   Drawer,
  TlTable,
  TlTableColumn,
  //   Progress,
  TlBadge,
  TlScrollbar,
  TlRate,
  TlBreadcrumb,
  TlBreadcrumbItem,
  //   Affix,
  TlInput,
  //   InputSearch,
  TlTree,
  //   TreeSelect,
  TlSlider,
  TlCollapse,
  TlCollapseGroup,
  //   Popconfirm,
  TlInputNumber,
  //   Tabs,
  //   TabPane,
  TlPagination,
  TlForm,
  TlFormItem,
  //   InputTag,
  TlTextArea,
  //   Tag,
  //   Calendar,
  //   CalendarMin,
  //   Skeleton,
  TlDivider,
  TlLink,
  //   Alert,
  TlButton,
  //   Theme,
  TlAvatar,
  TlAvatarGroup,
  TlSpace,
  //   Timeline,
  //   TimelineItem,
  TlParagraph,
  TlTitle,
  TlText,
  TlEmpty,
  //   BackTop,
  TlTooltip,
  //   Modal,
  TlDropdown,
  TlDropdownItem,
  TlImage,
  TlImagePreview,
  TlImagePreviewGroup,
  //   Spinner,
  //   TimePicker,
};

export {
  TlUpload,
  TlRadioGroup,
  TlRadio,
  //   TlProgress,
  TlBadge,
  TlCheckbox,
  TlCheckboxGroup,
  TlSwitch,
  TlAnchor,
  //   TlPopover,
  //   TlDrawer,
  TlScrollbar,
  TlRate,
  TlBreadcrumb,
  TlBreadcrumbItem,
  //   TlAffix,
  TlInput,
  //   TlInputSearch,
  //   TlTree,
  //   TlTreeSelect,
  TlSlider,
  TlCollapse,
  TlCollapseGroup,
  //   TlPopconfirm,
  TlInputNumber,
  //   TlTabs,
  //   TlTabPane,
  TlPagination,
  TlForm,
  TlFormItem,
  //   TlInputTag,
  TlTextArea,
  //   TlTag,
  //   TlCalendar,
  //   TlCalendarMin,
  //   TlSkeleton,
  TlDivider,
  TlLink,
  //   TlAlert,
  TlButton,
  //   TlTheme,
  TlParagraph,
  TlAvatar,
  TlAvatarGroup,
  TlSpace,
  TlTable,
  TlTableColumn,
  //   TlTimeline,
  //   TlTimelineItem,
  TlTitle,
  TlText,
  //   TlMessage,
  //   TlNotification,
  TlEmpty,
  //   TlBackTop,
  TlTooltip,
  //   TlModal,
  TlDropdown,
  TlDropdownItem,
  TlImage,
  TlImagePreview,
  TlImagePreviewGroup,
  //   TlSpinner,
  //   TlTimePicker,
  //   vLoading,
};

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);

// 全局注册
export default {
  install: (app: App) => {
    for (const c in components) {
      app.component(c, components[c]);
    }
    // app.config.globalProperties.$notification = TlNotification;
    // app.config.globalProperties.$message = TlMessage;
    // app.directive("loading", vLoading);
  },
};
