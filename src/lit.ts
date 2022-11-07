const resolve = require('./utils/resolve.js');

export = {
  extends: ['./rules/lit'].map(resolve),
  rules: {},
} as const;
