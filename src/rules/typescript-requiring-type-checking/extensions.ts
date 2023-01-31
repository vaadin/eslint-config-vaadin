const suggestions = require('../eslint/suggestions').rules;

export = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/dot-notation': suggestions['dot-notation'],
    // Disallow the use of eval()-like methods
    // https://typescript-eslint.io/rules/no-implied-eval
    '@typescript-eslint/no-implied-eval': 'error',
    // Disallow throwing literals as exceptions
    // https://typescript-eslint.io/rules/no-throw-literal
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': suggestions['no-return-await'],
  },
} as const;
