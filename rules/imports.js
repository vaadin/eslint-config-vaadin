module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    // no restricted paths by default
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': [
      'error',
      {
        // there can be loading files by http/2
        esmodules: false,
        commonjs: true,
      },
    ],
    // dynamic require can be useful
    'import/no-dynamic-require': 'off',
    // common pattern to use internal modules
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    // relative imports are the basics of es6-imports, they cannot be disabled
    'import/no-relative-parent-imports': 'error',
    'import/export': 'error',
    // breaks the main idea of default exports to be named freely
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'error',
    // disabled by default; enable if necessary
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/unambiguous': 'error',
    // disabled by default; enable if necessary
    'import/no-commonjs': 'off',
    // disabled by default; enable if necessary
    'import/no-amd': 'off',
    // disabled by default; enable if necessary
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    // namespaces are useful
    'import/no-namespace': 'off',
    // since there can be browser-style approach as well as node approach
    'import/extensions': 'off',
    'import/order': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    // who knows how much dependencies is needed
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    // default exports are useful
    'no-default-export': 'off',
    'import/no-anonymous-default-export': 'error',
    // better not to group them instead of grouping
    'import/group-exports': 'off',
    // disabled by default; enable if necessary
    'dynamic-import-chunkname': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
};
