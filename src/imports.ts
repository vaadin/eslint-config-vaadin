export = {
  env: {
    es6: true,
  },
  extends: ['./rules/imports'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.cjs', '.jsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.cjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
};
