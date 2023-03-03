export = {
  extends: ['./javascript'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', '.cts'],
    },
    'import/resolver': {
      node: true,
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
