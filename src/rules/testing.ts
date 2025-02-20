import { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
  '@typescript-eslint/no-unused-expressions': 'off',
  'chai-friendly/no-unused-expressions': 'error',
  'max-classes-per-file': 'off',
  'no-unused-expressions': 'off',
};

export default rules;
