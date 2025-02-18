import type { Linter } from 'eslint';
import parser from '@babel/eslint-parser';
import possibleProblems from './rules/eslint/possible-problems.js';
import suggestions from './rules/eslint/suggestions.js';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules: {
      ...possibleProblems,
      ...suggestions,
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
  },
] satisfies readonly Linter.Config[];
