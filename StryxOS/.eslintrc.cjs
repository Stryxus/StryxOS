/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  rules: {},
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["vue"],
};
