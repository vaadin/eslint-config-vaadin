import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import tsEslint, { type ConfigArray } from 'typescript-eslint';

const config: ConfigArray = tsEslint.config(prettierConfig, {
  plugins: {
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
  },
});

export default config;
