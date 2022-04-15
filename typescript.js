module.exports = {
  extends: ['./index', './rules/typescript/original', './rules/typescript/extensions'].map(require.resolve),
  rules: {},
  overrides: [
    {
      files: ['*.spec.js', '*.spec.ts', '*.test.js', '*.test.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
};
