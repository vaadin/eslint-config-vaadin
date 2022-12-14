const resolve = require('./utils/resolve.js');

export = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['./javascript', './rules/typescript/original', './rules/typescript/extensions'].map(resolve),
} as const;
