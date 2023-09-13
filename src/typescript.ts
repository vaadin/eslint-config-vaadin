export = {
  extends: ['./javascript', './rules/typescript/original', './rules/typescript/extensions'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
} as const;
