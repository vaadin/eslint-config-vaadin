module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    './rules/eslint/layout-formatting',
    './rules/eslint/possible-problems',
    './rules/eslint/suggestions',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
};
