import type { Linter } from 'eslint';
import parser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import * as extensions from './rules/typescript/extensions.js';
import * as original from './rules/typescript/original.js';
import javascript from './javascript.js';

const jsExtensions = ['js', 'jsx', 'mjs', 'cjs', 'mjsx', 'cjsx'];
const tsExtensions = ['ts', 'tsx', 'mts', 'cts', 'mtsx', 'ctsx'];

export default [
  ...javascript,
  {
    languageOptions: {
      parser,
      plugins: {
        typescriptEslint,
      },
    },
  },
  {
    files: [`**/*.+(${jsExtensions.join(',')})`, `**/*.+(${tsExtensions.join(',')})`],
    rules: {
      ...extensions.common,
      ...original.common,
    },
  },
  {
    files: [`**/*.+(${tsExtensions.join(',')})`],
    rules: {
      ...extensions.specific,
      ...original.specific,
    },
  },
] as readonly Linter.Config[];
