module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  // Combining the extends array from both configurations, ensuring no duplicates and preserving the order where it makes sense.
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:@cspell/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  // Merging the plugins, ensuring no duplicates.
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "unused-imports",
    "tailwindcss",
    "simple-import-sort",
    "jsx-a11y",
  ],
  overrides: [
    // Merging the TypeScript files configuration
    {
      files: ["*/.ts", "*/.tsx"],
      plugins: [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort",
        "jsx-a11y",
      ],
      extends: [
        "plugin:tailwindcss/recommended",
        "next/core-web-vitals",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@cspell/recommended",
        "prettier",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      // Combining and deduplicating rules, paying attention to conflicts and prioritizing more specific or strict rules where there's overlap.
      rules: {
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
        "import/extensions": "off",
        "react/destructuring-assignment": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "tailwindcss/no-custom-classname": "off",
        "no-restricted-syntax": [
          "error",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
        ],
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/order": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        // Custom rules...
      },
    },
    // Merging configurations for testing (Jest/Testing Library) and e2e testing (Cypress) as provided.
    {
      files: ["*/.test.ts", "*/.test.tsx"],
      plugins: ["jest", "jest-formatting", "testing-library", "jest-dom"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        "prettier",
      ],
    },
    {
      files: ["*/.cy.ts", "*/.cy.js"],
      extends: ["plugin:cypress/recommended", "prettier"],
    },
  ],
};
