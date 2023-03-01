export = {
  plugins: ['chai-friendly'],
  rules: {
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'chai-friendly/no-unused-expressions': 'error',
    'max-classes-per-file': 'off',
  },
} as const;
