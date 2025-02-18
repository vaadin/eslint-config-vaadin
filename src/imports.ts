import { type Linter } from 'eslint';
import rules from './rules/imports';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules,
    languageOptions: {
      env: {
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.mjs', '.cjs', '.jsx', '.json'],
          },
        },
        'import/extensions': ['.js', '.mjs', '.cjs', '.jsx'],
        'import/core-modules': [],
        'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
      },
    },
  },
] satisfies readonly Linter.Config[];
