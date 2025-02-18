import type { Linter } from 'eslint';
import chaiFriendly from 'eslint-plugin-chai-friendly';
import rules from './rules/testing.js';

export default [
  {
    files: [
      '**/*.spec.js',
      '**/*.spec.ts',
      '**/*.spec.jsx',
      '**/*.spec.tsx',
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.jsx',
      '**/*.test.tsx',
    ],
    plugins: {
      chaiFriendly,
    },
    rules,
  },
] satisfies readonly Linter.Config[];
