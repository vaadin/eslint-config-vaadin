const resolve = require('./utils/resolve.js');

export = {
  extends: [
    './javascript',
    './rules/typescript-requiring-type-checking/original',
    './rules/typescript-requiring-type-checking/extensions',
  ].map(resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
} as const;
