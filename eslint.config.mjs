import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier,
  {
    rules: {
      "no-unused-vars": "warn",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "prefer-const": "error",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      "prettier/prettier": "error",
    },
  },
];
