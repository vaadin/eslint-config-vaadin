import type { Linter } from 'eslint';
import lit from 'eslint-plugin-lit';
import rules from './rules/lit.js';

export default [
  {
    rules,
    plugins: {
      lit,
    },
  },
] satisfies readonly Linter.Config[];
