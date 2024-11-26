module.exports = [
  {
    ignores: [".next/*", "node_modules/*"], // Exclude directories from linting
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Specify file types
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      next: "eslint-plugin-next",
    },
    rules: {
      "next/core-web-vitals": "error", // Recommended rules for Next.js
    },
  },
];
