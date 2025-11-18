import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
  // this rule either forces to write many `type` or duplicate imports
  'import-x/consistent-type-specifier-style': 'off',
  'import-x/default': 'error',
  // disabled by default; enable if necessary
  'import-x/dynamic-import-chunkname': 'off',
  'import-x/export': 'error',
  // it's better to group mutually dependent elements together which could
  // break this rule
  'import-x/exports-last': 'off',
  // since there can be browser-style approach as well as node approach
  'import-x/extensions': 'off',
  'import-x/first': 'error',
  // better not to group them instead of grouping
  'import-x/group-exports': 'off',
  // deprecated
  'import-x/imports-first': 'off',
  // who knows how many dependencies are needed
  'import-x/max-dependencies': 'off',
  'import-x/named': 'error',
  'import-x/namespace': 'error',
  'import-x/newline-after-import': 'error',
  'import-x/no-absolute-path': [
    'error',
    {
      // there can be loading files by http/2
      esmodule: false,
      commonjs: true,
    },
  ],
  // disabled by default; enable if necessary
  'import-x/no-amd': 'off',
  'import-x/no-anonymous-default-export': 'error',
  // disabled by default; enable if necessary
  'import-x/no-commonjs': 'off',
  'import-x/no-cycle': 'error',
  // default exports are useful
  'import-x/no-default-export': 'off',
  // disabled by default; enable if necessary
  'import-x/no-deprecated': 'off',
  'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
  // dynamic require can be useful
  'import-x/no-dynamic-require': 'off',
  'import-x/no-empty-named-blocks': 'error',
  'import-x/no-extraneous-dependencies': 'error',
  'import-x/no-import-module-exports': 'error',
  // common pattern to use internal modules
  'import-x/no-internal-modules': 'off',
  'import-x/no-mutable-exports': 'error',
  // breaks the main idea of default exports to be named freely
  'import-x/no-named-as-default': 'off',
  'import-x/no-named-as-default-member': 'error',
  'import-x/no-named-default': 'error',
  // named exports are useful
  'import-x/no-named-export': 'off',
  // namespaces are useful
  'import-x/no-namespace': 'off',
  // disabled by default; enable if necessary
  'import-x/no-nodejs-modules': 'off',
  'import-x/no-relative-packages': 'error',
  // relative imports are the basics of es6-imports, they cannot be disabled
  'import-x/no-relative-parent-imports': 'off',
  'import-x/no-rename-default': 'error',
  // no restricted paths by default
  'import-x/no-restricted-paths': 'off',
  'import-x/no-self-import': 'error',
  'import-x/no-unassigned-import': 'error',
  'import-x/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  // disabled by default: usually it does IDE for you; enable if necessary
  'import-x/no-unused-modules': 'off',
  'import-x/no-useless-path-segments': 'error',
  'import-x/no-webpack-loader-syntax': 'error',
  'import-x/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
        orderImportKind: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import-x/prefer-default-export': 'error',
  // disabled by default; enable if necessary
  'import-x/prefer-namespace-import': 'off',
  'import-x/unambiguous': 'error',
};

export default rules;
