import tsEslint, { type ConfigArray } from 'typescript-eslint';
import extensions from './rules/typescript-requiring-type-checking/extensions.js';
import original from './rules/typescript-requiring-type-checking/original.js';
import typescript from './typescript.js';

const config: ConfigArray = tsEslint.config({
  extends: [typescript],
  rules: {
    ...extensions,
    ...original,
  },
});

export default config;
