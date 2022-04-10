module.exports = {
  parser: 'babel-eslint',
  extends: [
    './rules/best-practices',
    './rules/es6',
    './rules/node',
    './rules/possible-errors',
    './rules/strict',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};
