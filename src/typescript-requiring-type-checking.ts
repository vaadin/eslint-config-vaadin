import type { Linter } from 'eslint';
import parser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import extensions from './rules/typescript-requiring-type-checking/extensions.js';
import original from './rules/typescript-requiring-type-checking/original.js';
import typescript from './typescript.js';

const languageOptions = {
  parser,
  plugins: {
    typescriptEslint,
  },
} satisfies Linter.LanguageOptions;

export default [
  ...typescript,
  {
    rules: {
      ...extensions,
      ...original,
    },
    languageOptions,
  },
] as readonly Linter.Config[];
