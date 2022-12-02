const resolve = require('./utils/resolve.js');

export = {
  extends: ['./rules/imports'].map(resolve),
  rules: {},
} as const;
