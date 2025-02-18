import type { Linter } from 'eslint';

export default {
  // disabled by default; enable if necessary
  'dynamic-import-chunkname': 'off',
  // this rule either forces to write many `type` or duplicate imports
  'import/consistent-type-specifier-style': 'off',
  'import/default': 'error',
  'import/export': 'error',
  // it's better to group mutually dependent elements together which could
  // break this rule
  'import/exports-last': 'off',
  // since there can be browser-style approach as well as node approach
  'import/extensions': 'off',
  'import/first': 'error',
  // better not to group them instead of grouping
  'import/group-exports': 'off',
  // deprecated
  'import/imports-first': 'off',
  // who knows how many dependencies are needed
  'import/max-dependencies': 'off',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/enforce-node-protocol-usage': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': [
    'error',
    {
      // there can be loading files by http/2
      esmodule: false,
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
  'import/no-duplicates': ['error', { 'prefer-inline': true }],
  // dynamic require can be useful
  'import/no-dynamic-require': 'off',
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': 'error',
  'import/no-import-module-exports': 'error',
  // common pattern to use internal modules
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'error',
  // breaks the main idea of default exports to be named freely
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  // named exports are useful
  'import/no-named-export': 'off',
  // namespaces are useful
  'import/no-namespace': 'off',
  // disabled by default; enable if necessary
  'import/no-nodejs-modules': 'off',
  'import/no-relative-packages': 'error',
  // relative imports are the basics of es6-imports, they cannot be disabled
  'import/no-relative-parent-imports': 'off',
  // no restricted paths by default
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'error',
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  // disabled by default: usually it does IDE for you; enable if necessary
  'import/no-unused-modules': 'off',
  'import/no-useless-path-segments': 'error',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
        orderImportKind: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import/prefer-default-export': 'error',
  'import/unambiguous': 'error',
  // default exports are useful
  'no-default-export': 'off',
} satisfies Linter.RulesRecord;
