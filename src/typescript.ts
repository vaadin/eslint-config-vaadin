export = {
  extends: ['./javascript', './rules/typescript/original', './rules/typescript/extensions'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${process.cwd()}/tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.cjs', '.js', '.mts', '.cts', '.ts', '.tsx', '.json'],
      },
    },
  },
} as const;
