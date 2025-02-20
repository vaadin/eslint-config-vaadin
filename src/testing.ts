import chaiFriendly from 'eslint-plugin-chai-friendly';
import tsEslint, { type ConfigArray } from 'typescript-eslint';
import rules from './rules/testing.js';

const config: ConfigArray = tsEslint.config({
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

export default config;
