import parser from '@babel/eslint-parser';
import tsEslint, { type ConfigArray } from 'typescript-eslint';
import possibleProblems from './rules/eslint/possible-problems.js';
import suggestions from './rules/eslint/suggestions.js';
import { jsExtensions } from './utils.js';

const config: ConfigArray = tsEslint.config({
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
