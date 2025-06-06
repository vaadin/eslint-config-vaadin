import importPlugin from 'eslint-plugin-import-x';
import tsEslint, { type ConfigArray } from 'typescript-eslint';
import rules from './rules/imports';
import { jsExtensions } from './utils.js';

const config: ConfigArray = tsEslint.config({
  files: ['**/*.{js,jsx,mjs,cjs}'],
  rules,
  plugins: {
    'import-x': importPlugin,
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
