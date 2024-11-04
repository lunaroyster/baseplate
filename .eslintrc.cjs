/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "./next/tsconfig.json",
      "./pkgs/*/tsconfig.json",
    ],
    tsconfigRootDir: './',
  },
  settings: {
    next: {
      rootDir: "./next",
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    // "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  ignorePatterns: [".eslintrc.cjs", "_baseplate/*", "next/next.config.js"], // Since no ts file includes this file
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
module.exports = config;
