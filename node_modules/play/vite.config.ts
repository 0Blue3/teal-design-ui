import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// 不需要这个步骤
// import DefineOptions from 'unplugin-vue-define-options/vite';
// DefineOptions()

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
