import lit from 'eslint-plugin-lit';
import tsEslint from 'typescript-eslint';
import rules from './rules/lit.js';

export default tsEslint.config({
  rules,
  plugins: {
    lit,
  },
});
