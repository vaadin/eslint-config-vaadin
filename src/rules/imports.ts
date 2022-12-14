export = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    // disabled by default; enable if necessary
    'dynamic-import-chunkname': 'off',
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    // since there can be browser-style approach as well as node approach
    'import/extensions': 'off',
    'import/first': 'error',
    // better not to group them instead of grouping
    'import/group-exports': 'off',
    // who knows how many dependencies are needed
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': [
      'error',
      {
        // there can be loading files by http/2
        esmodules: false,
        commonjs: true,
      },
    ],
    // disabled by default; enable if necessary
    'import/no-amd': 'off',
    'import/no-anonymous-default-export': 'error',
    // disabled by default; enable if necessary
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    // disabled by default; enable if necessary
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    // dynamic require can be useful
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'error',
    // common pattern to use internal modules
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    // breaks the main idea of default exports to be named freely
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    // namespaces are useful
    'import/no-namespace': 'off',
    // disabled by default; enable if necessary
    'import/no-nodejs-modules': 'off',
    // relative imports are the basics of es6-imports, they cannot be disabled
    'import/no-relative-parent-imports': 'error',
    // no restricted paths by default
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'error',
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'error',
    // default exports are useful
    'no-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.cjs', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.cjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
} as const;
