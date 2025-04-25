import { fileURLToPath, URL } from "node:url";

const aliasComponent = [
  {
    find: /^.*\/VPHome\.vue$/,
    replacement: fileURLToPath(
      new URL("./components/home.vue", import.meta.url)
    ),
  },
];

export default aliasComponent;
