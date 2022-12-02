const resolve = require('./utils/resolve.js');

export = {
  extends: ['./javascript', './rules/typescript/original', './rules/typescript/extensions'].map(resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
} as const;
