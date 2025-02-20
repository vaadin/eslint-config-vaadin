import chaiFriendly from 'eslint-plugin-chai-friendly';
import tsEslint from 'typescript-eslint';
import rules from './rules/testing.js';

export default tsEslint.config({
  files: [
    '**/*.spec.js',
    '**/*.spec.ts',
    '**/*.spec.jsx',
    '**/*.spec.tsx',
    '**/*.test.js',
    '**/*.test.ts',
    '**/*.test.jsx',
    '**/*.test.tsx',
  ],
  plugins: {
    'chai-friendly': chaiFriendly,
  },
  rules,
});
