const layoutFormatting = require('../eslint/layout-formatting').rules;
const possibleProblems = require('../eslint/possible-problems').rules;
const suggestions = require('../eslint/suggestions').rules;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${process.cwd()}/tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Enforce consistent brace style for blocks
    // https://typescript-eslint.io/rules/brace-style
    'brace-style': 'off',
    '@typescript-eslint/brace-style': layoutFormatting['brace-style'],

    // Require or disallow trailing comma
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/comma-dangle
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': layoutFormatting['comma-dangle'],

    // Enforces consistent spacing before and after commas
    // https://typescript-eslint.io/rules/comma-spacing
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': layoutFormatting['comma-spacing'],

    // Enforce default parameters to be last
    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': suggestions['default-param-last'],

    // Enforce dot notation whenever possible
    // https://typescript-eslint.io/rules/dot-notation
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': suggestions['dot-notation'],

    // Require or disallow spacing between function identifiers and their invocations
    // https://typescript-eslint.io/rules/func-call-spacing
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': layoutFormatting['func-call-spacing'],

    // Enforce consistent indentation
    // https://typescript-eslint.io/rules/indent
    indent: 'off',
    '@typescript-eslint/indent': layoutFormatting['indent'],

    // Require or disallow initialization in variable declarations
    // https://typescript-eslint.io/rules/init-declarations
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': suggestions['init-declarations'],

    // Enforce consistent spacing before and after keywords
    // https://typescript-eslint.io/rules/keyword-spacing
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': layoutFormatting['keyword-spacing'],

    // Require or disallow an empty line between class members
    // https://typescript-eslint.io/rules/lines-between-class-members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': layoutFormatting['lines-between-class-members'],

    // Disallow generic Array constructors
    // https://typescript-eslint.io/rules/no-array-constructor
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate class members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': possibleProblems['no-dupe-class-members'],

    // Disallow duplicate imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': possibleProblems['no-duplicate-imports'],

    // Disallow Empty Functions
    // https://typescript-eslint.io/rules/no-empty-function
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': suggestions['no-empty-function'],

    // Disallow unnecessary parentheses
    // https://typescript-eslint.io/rules/no-extra-parens
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': layoutFormatting['no-extra-parens'],

    // Disallow unnecessary semicolons
    // https://typescript-eslint.io/rules/no-extra-semi
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': suggestions['no-extra-semi'],

    // Disallow the use of eval()-like methods
    // https://typescript-eslint.io/rules/no-implied-eval
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallow this keywords outside of classes or class-like objects
    // https://typescript-eslint.io/rules/no-invalid-this
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': suggestions['no-invalid-this'],

    // Disallow function declarations that contain unsafe references inside loop statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-loop-func
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': suggestions['no-loop-func'],

    // Disallow literal numbers that lose precision
    // https://typescript-eslint.io/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': possibleProblems['no-loss-of-precision'],

    // Disallows magic numbers
    // https://typescript-eslint.io/rules/no-magic-numbers
    // EXPLANATION: Too strict
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    // Disallow variable redeclaration
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': suggestions['no-redeclare'],

    // Disallow specified modules when loaded by import
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': suggestions['no-restricted-imports'],

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': suggestions['no-shadow'],

    // Disallow throwing literals as exceptions
    // https://typescript-eslint.io/rules/no-throw-literal
    '@typescript-eslint/no-throw-literal': 'error',

    // Disallow unused expressions
    // https://typescript-eslint.io/rules/no-unused-expressionss
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': suggestions['no-unused-expressions'],

    // Disallow unused variables
    // https://typescript-eslint.io/rules/no-unused-vars
    'no-unused-vars': 'off',
    // Disabled due to the following issue: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars': 'off',

    // Disallow the use of variables before they are defined
    // https://typescript-eslint.io/rules/no-use-before-define
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ...possibleProblems['no-use-before-define'][1],
        typedefs: true,
      },
    ],

    // Disallow unnecessary constructors
    // https://typescript-eslint.io/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Enforces consistent returning of awaited values
    // https://typescript-eslint.io/rules/return-await
    'no-return-await': 'off',
    '@typescript-eslint/return-await': suggestions['no-return-await'],

    // Enforce consistent spacing inside braces
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/object-curly-spacing
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': layoutFormatting['object-curly-spacing'],

    // Require or disallow padding lines between statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': layoutFormatting['padding-line-between-statements'],

    // Disallow async functions which have no await expression
    // https://typescript-eslint.io/rules/require-await
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    // Require or disallow semicolons instead of ASI
    // https://typescript-eslint.io/rules/semi
    semi: 'off',
    '@typescript-eslint/semi': layoutFormatting['semi'],

    // Enforces consistent spacing before blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-before-blocks
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': layoutFormatting['space-before-blocks'],

    // Enforces consistent spacing before function parenthesis
    // https://typescript-eslint.io/rules/space-before-function-paren
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': layoutFormatting['space-before-function-paren'],

    // This rule is aimed at ensuring there are spaces around infix operators
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/space-infix-ops
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': layoutFormatting['space-infix-ops'],

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://typescript-eslint.io/rules/quotes
    quotes: 'off',
    '@typescript-eslint/quotes': layoutFormatting['quotes'],
  },
};
