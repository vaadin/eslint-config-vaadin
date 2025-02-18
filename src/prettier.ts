import type { Linter } from 'eslint';
import config from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default [
  config,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
] satisfies readonly Linter.Config[];
