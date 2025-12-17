import parser from '@babel/eslint-parser';
import possibleProblems from './rules/eslint/possible-problems.js';
import suggestions from './rules/eslint/suggestions.js';
import { jsExtensions } from './utils.js';
import { defineConfig, type Config } from 'eslint/config';

const config: readonly Config[] = defineConfig({
  files: [`**/*.{${jsExtensions.join(',')}}`],
  rules: {
    ...possibleProblems,
    ...suggestions,
  },
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
});

export default config;
