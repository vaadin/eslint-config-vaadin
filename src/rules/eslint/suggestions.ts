import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
  'accessor-pairs': 'error',
  'arrow-body-style': ['error', 'as-needed'],
  // handled by "no-var" rule
  'block-scoped-var': 'off',
  camelcase: ['error', { properties: 'always' }],
  // basically unnecessary
  'capitalized-comments': 'off',
  'class-methods-use-this': 'error',
  // too strict; it is better to use other tools like IDE to calculate complexity
  complexity: 'off',
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
  // for-in is forbidden
  'guard-for-in': 'off',
  // no ID to forbid by default
  'id-denylist': 'off',
  // too strict
  'id-length': 'off',
  // too strict
  'id-match': 'off',
  // handled by "no-var" rule
  'init-declarations': 'off',
  'logical-assignment-operators': 'error',
  'max-classes-per-file': ['error', 3],
  'max-depth': ['error', 4],
  // usually, it is quite hard to avoid too big files
  'max-lines': 'off',
  // too strict
  'max-lines-per-function': 'off',
  // too strict
  'max-nested-callbacks': 'off',
  'max-params': ['error', { max: 4 }],
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
  // empty or no-op functions could be quite useful
  'no-empty-function': 'off',
  'no-empty-static-block': 'error',
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
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-object-constructor': 'error',
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
  // no restricted globals by default
  'no-restricted-globals': 'off',
  // no restricted imports by default
  'no-restricted-imports': 'off',
  // no specific properties to restrict
  'no-restricted-properties': 'off',
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message: 'for..in loops are slower than Object.{keys,values,entries} and have their caveats.',
    },
    // From eslint-config-airbnb
    // https://github.com/airbnb/javascript/blob/b4377fb03089dd7f08955242695860d47f9caab4/packages/eslint-config-airbnb-base/rules/style.js#L333
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-return-assign': ['error', 'always'],
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
  'prefer-destructuring': ['error', { array: false, object: true }],
  'prefer-exponentiation-operator': 'error',
  // let's leave it for the developer's choice
  'prefer-named-capture-group': 'off',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-regex-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'preserve-caught-error': 'error',
  // handled by Prettier
  'quote-props': 'off',
  radix: 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'require-yield': 'error',
  // handled by "eslint-plugin-import" rules
  'sort-imports': 'off',
  // handled by "eslint-plugin-perfectionist" rules
  'sort-keys': 'off',
  // handled by "one-var" rule
  'sort-vars': 'off',
  strict: 'off',
  'symbol-description': 'off',
  // ESLint recommends using `never` since UTF-8 is the default encoding, and it doesn't require a BOM
  // https://eslint.org/docs/latest/rules/unicode-bom
  'unicode-bom': ['error', 'never'],
  // handled by "no-vars" rule
  'vars-on-top': 'off',
  yoda: ['error', 'never'],
};

export default rules;
