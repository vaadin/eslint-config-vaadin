export = {
  extends: ['./rules/eslint/layout-formatting', './rules/eslint/possible-problems', './rules/eslint/suggestions'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
};
