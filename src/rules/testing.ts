import type { Linter } from 'eslint';

export default {
  '@typescript-eslint/no-unused-expressions': 'off',
  'chai-friendly/no-unused-expressions': 'error',
  'max-classes-per-file': 'off',
  'no-unused-expressions': 'off',
} satisfies Linter.RulesRecord;
