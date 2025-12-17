import { defineConfig, type Config } from 'eslint/config';
import chaiFriendly from 'eslint-plugin-chai-friendly';
import rules from './rules/testing.js';

const config: readonly Config[] = defineConfig({
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
