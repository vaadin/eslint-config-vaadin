import { defineConfig, type Config } from 'eslint/config';
import reactPerf from 'eslint-plugin-react-perf';
import rules from './rules/react/react-perf.js';

const config: readonly Config[] = defineConfig({
  plugins: {
    'react-perf': reactPerf,
  },
  rules,
});

export default config;
