import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parserOptions: {
        project: "**/tsconfig.json",
        ecmaFeatures: { jsx: true },
      },
      rules: { "react/react-in-jsx-scope": "off" },

      extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "prettier",
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];