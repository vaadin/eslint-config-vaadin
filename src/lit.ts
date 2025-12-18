import { defineConfig, type Config } from 'eslint/config';
import lit from 'eslint-plugin-lit';
import rules from './rules/lit.js';

const config: readonly Config[] = defineConfig({
  rules,
  plugins: {
    lit,
  },
});

export default config;
