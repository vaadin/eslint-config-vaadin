import { Linter } from 'eslint';
import suggestions from '../eslint/suggestions.js';

const rules: Linter.RulesRecord = {
  // Require `return` statements to either always or never specify values.
  // https://typescript-eslint.io/rules/consistent-return/
  '@typescript-eslint/consistent-return': suggestions['consistent-return'] ?? 'off',
  // Enforce dot notation whenever possible
  // https://typescript-eslint.io/rules/dot-notation
  '@typescript-eslint/dot-notation': suggestions['dot-notation'] ?? 'off',
  // Disallow the use of eval()-like methods
  // https://typescript-eslint.io/rules/no-implied-eval
  '@typescript-eslint/no-implied-eval': suggestions['no-implied-eval'] ?? 'off',
  // Disallow throwing literals as exceptions
  // https://typescript-eslint.io/rules/no-throw-literal
  '@typescript-eslint/only-throw-error': suggestions['no-throw-literal'] ?? 'off',
  // Require destructuring from arrays and/or objects
  // https://typescript-eslint.io/rules/prefer-destructuring
  '@typescript-eslint/prefer-destructuring': 'error',
  // Require using Error objects as Promise rejection reasons
  // https://typescript-eslint.io/rules/prefer-promise-reject-errors
  '@typescript-eslint/prefer-promise-reject-errors': suggestions['prefer-promise-reject-errors'] ?? 'off',
  // Disallow async functions which have no await expression
  // https://typescript-eslint.io/rules/require-await
  '@typescript-eslint/require-await': suggestions['require-await'] ?? 'off',
  'dot-notation': 'off',
  'no-implied-eval': 'off',
  'no-throw-literal': 'off',
  'prefer-destructuring': 'off',
  'prefer-promise-reject-errors': 'off',
  'require-await': 'off',
};

export default rules;
