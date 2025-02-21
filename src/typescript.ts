import tsEslint, { type ConfigArray } from 'typescript-eslint';
import javascript from './javascript.js';
import * as extensions from './rules/typescript/extensions.js';
import * as original from './rules/typescript/original.js';
import { jsExtensions, tsExtensions } from './utils.js';

const config: ConfigArray = tsEslint.config(
  javascript,
  tsEslint.configs.base,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: [`**/*.{${jsExtensions.join(',')}}`, `**/*.{${tsExtensions.join(',')}}`],
    rules: {
      ...extensions.common,
      ...original.common,
    },
  },
  {
    files: [`**/*.{${tsExtensions.join(',')}}`],
    rules: {
      ...extensions.specific,
      ...original.specific,
    },
  },
);

export default config;
