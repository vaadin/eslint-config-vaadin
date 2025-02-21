import lit from 'eslint-plugin-lit';
import tsEslint, { type ConfigArray } from 'typescript-eslint';
import rules from './rules/lit.js';

const config: ConfigArray = tsEslint.config({
  rules,
  plugins: {
    lit,
  },
});

export default config;
