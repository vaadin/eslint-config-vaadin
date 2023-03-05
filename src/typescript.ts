export = {
  extends: ['./javascript', './rules/typescript/original', './rules/typescript/extensions'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${process.cwd()}/tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
} as const;
