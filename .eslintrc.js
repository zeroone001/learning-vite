module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    // "prettier",
    // "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
