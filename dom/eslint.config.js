module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  }
};