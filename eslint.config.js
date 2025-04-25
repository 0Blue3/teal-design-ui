import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import typescriptEslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";

// /** @type {import('eslint').Linter.Config[]} */
export default defineConfigWithVueTs.config(
  {
    ignores: [
      "node_modules",
      "dist",
      "*.css",
      "*.jpg",
      "*.jpeg",
      "*.png",
      "*.gif",
      "*.d.ts",
    ],
  },
  {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      eslint.configs.recommended,
      ...pluginVue.configs["flat/recommended"],
      ...typescriptEslint.configs.recommended,
      vueTsConfigs.recommended, // defineConfigWithVueTs(vueTsConfigs.recommended)
    ],
    rules: {
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/single-html-element-content-newline": "off",
      "vue/multi-word-component-names": "off",
    },
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        defineOptions: "readonly",
        defineProps: "readonly",
      },
    },
  },
  eslintConfigPrettier
);
// module.exports = {
//   "env": {
//     "browser": true,
//     "es2021": true,
//     "node": true
//   },
//   "extends": [
//     "eslint:recommended",.
//     "plugin:vue/vue3-recommended",?
//     "plugin:@typescript-eslint/recommend",.
//     "@vue/typescript/recommend"?
//   ],

//   "rules": {
//     "vue/html-self-closing": "off",
//     "vue/max-attributes-per-line": "off",
//     "vue/single-html-element-content-newline": "off",
//     "vue/multi-word-component-names": "off"
//   },
// }
