const resolve = require('./utils/resolve.js');

export = {
  extends: [
    './javascript',
    './rules/typescript-requiring-type-check/original.ts',
    './rules/typescript-requiring-type-check/extensions.ts',
  ].map(resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
} as const;
