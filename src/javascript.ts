import parser from '@babel/eslint-parser';
import tsEslint from 'typescript-eslint';
import possibleProblems from './rules/eslint/possible-problems.js';
import suggestions from './rules/eslint/suggestions.js';
import { jsExtensions } from './utils.js';

export default tsEslint.config({
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
