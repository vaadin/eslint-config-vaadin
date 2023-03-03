export = {
  extends: [
    './typescript',
    './rules/typescript-requiring-type-checking/original',
    './rules/typescript-requiring-type-checking/extensions',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${process.cwd()}/tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.cjs', '.js', '.jsx', '.mts', '.cts', '.ts', '.tsx', '.json'],
      },
    },
  },
} as const;
