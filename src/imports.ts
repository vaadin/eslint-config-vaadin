import importX from 'eslint-plugin-import-x';
import rules from './rules/imports';
import { jsExtensions } from './utils.js';
import { defineConfig, type Config } from 'eslint/config';

const config: readonly Config[] = defineConfig({
  files: ['**/*.{js,jsx,mjs,cjs}'],
  rules,
  plugins: {
    // @ts-expect-error: https://github.com/un-ts/eslint-plugin-import-x/issues/439
    'import-x': importX,
  },
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [...jsExtensions, '.json'],
      },
    },
    'import/extensions': jsExtensions,
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
});

export default config;
