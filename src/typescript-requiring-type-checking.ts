import type { Linter } from 'eslint';
import extensions from './rules/typescript-requiring-type-checking/extensions.js';
import original from './rules/typescript-requiring-type-checking/original.js';
import typescript from './typescript.js';

export default [
  ...typescript,
  {
    rules: {
      ...extensions,
      ...original,
    },
  },
] as readonly Linter.Config[];
