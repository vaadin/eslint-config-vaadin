import { defineConfig, type Config } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

const config: readonly Config[] = defineConfig(prettierConfig, {
  plugins: {
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
  },
});

export default config;
