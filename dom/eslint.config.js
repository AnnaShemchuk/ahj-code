const globals = require('globals');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  globals: {
    ...globals.browser,
  },
  rules: {
    'jest/expect-expect': 'off',
    'no-unused-vars': 'warn'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
};