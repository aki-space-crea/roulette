module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "sort-keys-custom-order",
    "simple-import-sort",
    "import",
    "unused-imports",
    "tailwindcss",
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // For JS objects sorting
    "sort-keys-custom-order/object-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    // For TS types sorting
    "sort-keys-custom-order/type-keys": [
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    tailwindcss: {
      groupByResponsive: true,
      whitelist: [],
    },
  },
};
