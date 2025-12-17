import { defineConfig, type Config } from 'eslint/config';
import extensions from './rules/typescript-requiring-type-checking/extensions.js';
import original from './rules/typescript-requiring-type-checking/original.js';
import typescript from './typescript.js';

const config: readonly Config[] = defineConfig(...typescript, {
  rules: {
    ...extensions,
    ...original,
  },
});

export default config;
