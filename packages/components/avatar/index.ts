import { withInstall } from "@teal/utils";
import _Avatar from "./src/avatar.vue";
const Avatar = withInstall(_Avatar);
export default Avatar;

import _AvatarGroup from "./src/avatar-group.vue";
export const TlAvatarGroup = withInstall(_AvatarGroup);

// 导出类型声明
export * from "./src/avatar";

// 这里添加的类型 可以在模板中被解析
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    TlAvatar: typeof Avatar;
    TlAvatarGroup: typeof TlAvatarGroup;
  }
}
