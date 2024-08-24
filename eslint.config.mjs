import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      indent: ["error", 2],
      "prefer-const": "error",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      "max-len": ["warn", { code: 120 }],
    },
  },
];
