const resolve = require('../utils/resolve.js');

export = {
  extends: ['./imports'].map(resolve),
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
