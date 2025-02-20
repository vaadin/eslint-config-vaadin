import tsEslint from 'typescript-eslint';
import javascript from './javascript.js';
import * as extensions from './rules/typescript/extensions.js';
import * as original from './rules/typescript/original.js';
import { jsExtensions, tsExtensions } from './utils.js';

export default tsEslint.config(
  javascript,
  tsEslint.configs.base,
  {
    languageOptions: {
      parserOptions: {
        project: `${process.cwd()}/tsconfig.json`,
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
