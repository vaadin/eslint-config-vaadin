module.exports = {
  extends: ['./index', './rules/typescript/original', './rules/typescript/extensions'].map(require.resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
};
