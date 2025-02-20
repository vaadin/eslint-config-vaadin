import config from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(config, {
  plugins: {
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
  },
});
