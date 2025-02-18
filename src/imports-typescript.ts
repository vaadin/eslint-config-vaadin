import type { Linter } from 'eslint';
import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import rules from './rules/imports.js';

export default [
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules,
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      parser,
      parserOptions: {
        project: `${process.cwd()}/tsconfig.json`,
      },
    },
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
  },
] satisfies readonly Linter.Config[];
