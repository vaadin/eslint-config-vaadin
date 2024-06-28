const possibleProblems = require('../eslint/possible-problems').rules;
const suggestions = require('../eslint/suggestions').rules;
export = {
  rules: {
    '@typescript-eslint/consistent-return': suggestions['consistent-return'],
    'consistent-return': 'off',
    '@typescript-eslint/max-params': suggestions['max-params'],
    'max-params': 'off',
    '@typescript-eslint/no-array-delete': suggestions['no-array-delete'],

    // DEPRECATED
    '@typescript-eslint/block-spacing': 'off',
    // DEPRECATED
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/class-methods-use-this': [
      'error',
      {
        ignoreOverrideMethods: true,
        ignoreClassesThatImplementAnInterface: true,
      },
    ],
    // DEPRECATED
    '@typescript-eslint/comma-dangle': 'off',
    // DEPRECATED
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/default-param-last': suggestions['default-param-last'],
    // DEPRECATED
    '@typescript-eslint/func-call-spacing': 'off',
    // DEPRECATED
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/init-declarations': suggestions['init-declarations'],
    // DEPRECATED
    '@typescript-eslint/key-spacing': 'off',
    // DEPRECATED
    '@typescript-eslint/keyword-spacing': 'off',
    // DEPRECATED
    '@typescript-eslint/lines-around-comment': 'off',
    // DEPRECATED
    '@typescript-eslint/lines-between-class-members': 'off',
    // Disallow generic Array constructors
    // https://typescript-eslint.io/rules/no-array-constructor
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-dupe-class-members': possibleProblems['no-dupe-class-members'],
    '@typescript-eslint/no-empty-function': suggestions['no-empty-function'],
    // DEPRECATED
    '@typescript-eslint/no-extra-parens': 'off',
    // DEPRECATED
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-invalid-this': suggestions['no-invalid-this'],
    '@typescript-eslint/no-loop-func': suggestions['no-loop-func'],
    '@typescript-eslint/no-loss-of-precision': possibleProblems['no-loss-of-precision'],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-redeclare': suggestions['no-redeclare'],
    '@typescript-eslint/no-restricted-imports': suggestions['no-restricted-imports'],
    '@typescript-eslint/no-shadow': suggestions['no-shadow'],
    '@typescript-eslint/no-unused-expressions': suggestions['no-unused-expressions'],
    // Disabled due to the following issue: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ...possibleProblems['no-use-before-define'][1],
        typedefs: true,
      },
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    // DEPRECATED
    '@typescript-eslint/object-curly-spacing': 'off',
    // DEPRECATED
    '@typescript-eslint/padding-line-between-statements': 'off',
    // DEPRECATED
    '@typescript-eslint/quotes': 'off',
    // DEPRECATED
    '@typescript-eslint/semi': 'off',
    // DEPRECATED
    '@typescript-eslint/space-before-blocks': 'off',
    // DEPRECATED
    '@typescript-eslint/space-before-function-paren': 'off',
    // DEPRECATED
    '@typescript-eslint/space-infix-ops': 'off',
    // Enforce consistent brace style for blocks
    // https://typescript-eslint.io/rules/brace-style
    'brace-style': 'off',
    // Require or disallow trailing comma
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/comma-dangle
    'comma-dangle': 'off',
    // Enforces consistent spacing before and after commas
    // https://typescript-eslint.io/rules/comma-spacing
    'comma-spacing': 'off',
    // Enforce default parameters to be last
    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',
    // Require or disallow spacing between function identifiers and their invocations
    // https://typescript-eslint.io/rules/func-call-spacing
    'func-call-spacing': 'off',
    // Enforce consistent indentation
    // https://typescript-eslint.io/rules/indent
    indent: 'off',
    // Require or disallow initialization in variable declarations
    // https://typescript-eslint.io/rules/init-declarations
    'init-declarations': 'off',
    // Enforce consistent spacing before and after keywords
    // https://typescript-eslint.io/rules/keyword-spacing
    'keyword-spacing': 'off',
    'lines-around-comment': 'off',
    // Require or disallow an empty line between class members
    // https://typescript-eslint.io/rules/lines-between-class-members
    'lines-between-class-members': 'off',
    // Disallow duplicate class members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
    // Disallow Empty Functions
    // https://typescript-eslint.io/rules/no-empty-function
    'no-empty-function': 'off',
    // Disallow unnecessary parentheses
    // https://typescript-eslint.io/rules/no-extra-parens
    'no-extra-parens': 'off',
    // Disallow unnecessary semicolons
    // https://typescript-eslint.io/rules/no-extra-semi
    'no-extra-semi': 'off',
    // Disallow this keywords outside of classes or class-like objects
    // https://typescript-eslint.io/rules/no-invalid-this
    'no-invalid-this': 'off',
    // Disallow function declarations that contain unsafe references inside loop statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-loop-func
    'no-loop-func': 'off',
    // Disallow literal numbers that lose precision
    // https://typescript-eslint.io/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',
    // Disallows magic numbers
    // https://typescript-eslint.io/rules/no-magic-numbers
    // EXPLANATION: Too strict
    'no-magic-numbers': 'off',
    // Disallow variable redeclaration
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare
    'no-redeclare': 'off',
    // Disallow specified modules when loaded by import
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',
    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow
    'no-shadow': 'off',
    // Disallow unused expressions
    // https://typescript-eslint.io/rules/no-unused-expressionss
    'no-unused-expressions': 'off',
    // Disallow unused variables
    // https://typescript-eslint.io/rules/no-unused-vars
    'no-unused-vars': 'off',
    // Disallow the use of variables before they are defined
    // https://typescript-eslint.io/rules/no-use-before-define
    'no-use-before-define': 'off',
    // Disallow unnecessary constructors
    // https://typescript-eslint.io/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    // Enforce consistent spacing inside braces
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/object-curly-spacing
    'object-curly-spacing': 'off',
    // Require or disallow padding lines between statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    // Enforce the consistent use of either backticks, double, or single quotes
    // https://typescript-eslint.io/rules/quotes
    quotes: 'off',
    // Require or disallow semicolons instead of ASI
    // https://typescript-eslint.io/rules/semi
    semi: 'off',
    // Enforces consistent spacing before blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-before-blocks
    'space-before-blocks': 'off',
    // Enforces consistent spacing before function parenthesis
    // https://typescript-eslint.io/rules/space-before-function-paren
    'space-before-function-paren': 'off',
    // This rule is aimed at ensuring there are spaces around infix operators
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-infix-ops
    'space-infix-ops': 'off',
  },
  overrides: [
    {
      // Use rules ONLY for TS(X) files and ignore JS(X)
      files: ['*.ts', '*.tsx'],
      rules: {
        // ts(2335), ts(2377)
        'constructor-super': 'off',
        // ts(2378)
        'getter-return': 'off',
        // ts(2588)
        'no-const-assign': 'off',
        // ts(2300)
        'no-dupe-args': 'off',
        // ts(1117)
        'no-dupe-keys': 'off',
        // ts(2539)
        'no-func-assign': 'off',
        // ts(2539), ts(2540)
        'no-import-assign': 'off',
        // ts(7009)
        'no-new-symbol': 'off',
        // ts(2349)
        'no-obj-calls': 'off',
        // ts(2408)
        'no-setter-return': 'off',
        // ts(2376)
        'no-this-before-super': 'off',
        // ts(2304)
        'no-undef': 'off',
        // ts(7027)
        'no-unreachable': 'off',
        // ts(2365), ts(2360), ts(2358)
        'no-unsafe-negation': 'off',
        // ts(2367)
        'valid-typeof': 'off',
      },
    },
  ],
} as const;
