const suggestions = require('../eslint/suggestions').rules;
export = {
  rules: {
    '@typescript-eslint/dot-notation': suggestions['dot-notation'],
    '@typescript-eslint/no-implied-eval': suggestions['no-implied-eval'],
    '@typescript-eslint/no-throw-literal': suggestions['no-throw-literal'],
    '@typescript-eslint/require-await': suggestions['require-await'],
    // Enforce dot notation whenever possible
    // https://typescript-eslint.io/rules/dot-notation
    'dot-notation': 'off',
    // Disallow the use of eval()-like methods
    // https://typescript-eslint.io/rules/no-implied-eval
    'no-implied-eval': 'off',
    // Disallow throwing literals as exceptions
    // https://typescript-eslint.io/rules/no-throw-literal
    'no-throw-literal': 'off',
    // Disallow async functions which have no await expression
    // https://typescript-eslint.io/rules/require-await
    'require-await': 'off',
  },
} as const;
