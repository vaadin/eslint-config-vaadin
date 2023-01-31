const resolve = require('./utils/resolve.js');

export = {
  extends: [
    './javascript',
    './rules/typescript-requiring-type-checking/original.ts',
    './rules/typescript-requiring-type-checking/extensions.ts',
  ].map(resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
} as const;
