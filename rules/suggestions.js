const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    // handled by "no-var" rule
    'block-scoped-var': 'off',
    camelcase: ['error', { properties: 'always' }],
    'capitalized-comments': ['error', 'always', { ignoreConsecutiveComments: true }],
    'class-methods-use-this': 'error',
    complexity: 'error',
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    // handled by Prettier
    curly: 'off',
    // use "no default" comment to describe that there shouldn't be any default
    'default-case': ['error', { commentPattern: '^no\\sdefault' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowPattern: '^[a-zA-Z]+([_-][a-zA-Z]+)+$' }],
    // using non-strict comparison with null could be useful
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'func-name-matching': ['error', 'always'],
    'func-names': ['error', 'always'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    // no ID to forbid by default
    'id-denylist': 'off',
    // too strict
    'id-length': 'off',
    // too strict
    'id-match': 'off',
    // handled by "no-var" rule
    'init-declarations': 'off',
    'max-classes-per-file': ['error', 3],
    'max-depth': ['error', 4],
    // usually, it is quite hard to avoid too big files
    'max-lines': 'off',
    // too strict
    'max-lines-per-function': 'off',
    // too strict
    'max-nested-callbacks': 'off',
    'max-params': ['error', 4],
    // too strict
    'max-statements': 'off',
    // single-line comment will be forced to be multiline too, not good
    'multiline-comment-style': 'off',
    // there could be situations when you have to create new object from
    // received variable
    'new-cap': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    // handled by Prettier
    'no-confusing-arrow': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // continue is useful and reduces unnecessary nesting
    'no-continue': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-function': 'error',
    // handled by "eqeqeq" rule
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    // handled by "no-label" rule
    'no-extra-label': 'off',
    // handled by Prettier
    'no-extra-semi': 'off',
    // handled by Prettier
    'no-floating-decimal': 'off',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    // inline comments are useful
    'no-inline-comments': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    // handled by "no-labels" rule
    'no-label-var': 'off',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    // too strict to use
    'no-magic-numbers': 'off',
    // handled by Prettier
    'no-mixed-operators': 'off',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    // sometimes negated condition is more explicit
    'no-negated-condition': 'off',
    // nested ternary with parens and multilining are useful
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-proto': 'error',
    // handled by "no-var" and "no-shadow" rules
    'no-redeclare': 'off',
    'no-regex-spaces': 'error',
    // no restricted exports by default
    'no-restricted-exports': 'off',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN', ...confusingBrowserGlobals],
    // no restricted imports by default
    'no-restricted-imports': 'off',
    // no specific properties to restrict
    'no-restricted-properties': 'off',
    // no restricted syntax by default
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    // ternaries are very useful
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    // undefined is useful
    'no-undefined': 'off',
    // disabled by default; enable if necessary
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    // handled by "no-labels" rule
    'no-unused-labels': 'off',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    // handled by "prefer-template" rule
    'no-useless-concat': 'off',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    // it is necessary to do warning comments sometimes
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    // handled by Prettier
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: false }],
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    'prefer-destructuring': ['error', { array: false, object: true }, { enforceForRenamedProperties: true }],
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    // handled by Prettier
    'quote-props': 'off',
    radix: 'error',
    // forbids returning promises which is not useful
    'require-await': 'off',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    // handled by "eslint-plugin-import" rules
    'sort-imports': 'off',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],
    // handled by "one-var" rule
    'sort-vars': 'off',
    'spaced-comment': ['error', 'always'],
    strict: 'off',
    'symbol-description': 'off',
    // handled by "no-vars" rule
    'vars-on-top': 'off',
    yoda: ['error', 'never'],
  },
};
