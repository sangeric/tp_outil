import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {ignores : ["eslint.config.mjs"]},
{
  files: ["**/*.{js,mjs,cjs}"],
  plugins: { js },
  languageOptions: {
  globals: {...globals.node,...globals.browser},
  ecmaVersion: "latest",
  sourceType: "commonjs"
},

rules: {
  "indent": ["error", 2],
  "quotes": ["error", "single"],
  "semi": ["error", "always"],
  "no-console": "off",
  "no-unused-vars": "error",
  "eqeqeq": ["error", "always"],
  "curly": ["error", "all"],
  "space-before-function-paren": ["error", "never"],
  "comma-dangle": ["error", "never"],
  "object-curly-spacing": ["error", "always"],
  "array-bracket-spacing": ["error", "never"]
  }
},
js.configs.recommended
]);