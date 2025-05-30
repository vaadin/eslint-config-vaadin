import tsEslint, { type ConfigArray } from 'typescript-eslint';
import reactPerf from 'eslint-plugin-react-perf';
import rules from './rules/react/react-perf.js';

const config: ConfigArray = tsEslint.config({
  plugins: {
    'react-perf': reactPerf,
  },
  rules,
});

export default config;
