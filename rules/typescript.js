const layoutFormatting = require('./layout-formatting').rules;
const possibleProblems = require('./possible-problems').rules;
const suggestions = require('./suggestions').rules;

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${process.cwd()}/tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Require that member overloads be consecutive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],

    // Disallows awaiting a value that is not a Promise
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
    '@typescript-eslint/await-thenable': 'error',

    // Bans // @ts-<directive> comments from being used or requires descriptions
    // after directive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    // EXPLANATION: Complete banning is too strict, but requiring the
    // description is a nice idea
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],

    // Bans // tslint:<rule-flag> comments from being used.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Bans specific types from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    // EXPLANATION: No specific types to ban
    '@typescript-eslint/ban-types': 'off',

    // Enforce consistent brace style for blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': layoutFormatting['brace-style'],

    // Ensures that literals on classes are exposed in a consistent style
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Enforces consistent spacing before and after commas
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': layoutFormatting['comma-spacing'],

    // Enforces consistent usage of type assertions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
    ],

    // Consistent with type definition either interface or type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // Enforce default parameters to be last
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': suggestions['default-param-last'],

    // Enforce dot notation whenever possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': suggestions['dot-notation'],

    // Require or disallow spacing between function identifiers and their invocations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': layoutFormatting['func-call-spacing'],

    // Enforce consistent indentation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: 'off',
    '@typescript-eslint/indent': layoutFormatting['indent'],

    // Require or disallow initialization in variable declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': suggestions['init-declarations'],

    // Enforce consistent spacing before and after keywords
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': layoutFormatting['keyword-spacing'],

    // Require or disallow an empty line between class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': layoutFormatting['lines-between-class-members'],

    // Require a specific member delimiter style for interfaces and type literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    // handled by Prettier
    '@typescript-eslint/member-delimiter-style': 'off',

    // Require a consistent member declaration order
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'field',

          'constructor',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'method',
        ],
        interfaces: ['field', 'constructor', 'method'],
        typeLiterals: ['field', 'constructor', 'method'],
      },
    ],

    // Enforces using a particular method signature syntax
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    // Enforces naming conventions for everything across a codebase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    // it is hard to configure this rule accurately
    '@typescript-eslint/naming-convention': 'off',

    // Disallow generic Array constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    '@typescript-eslint/no-array-constructor': 'error',

    // Requires that .toString() is only called on objects which provide useful
    // information when stringified.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
    '@typescript-eslint/no-base-to-string': 'error',

    // Disallow non-null assertion in locations that may be confusing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Disallow duplicate class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': possibleProblems['no-dupe-class-members'],

    // Disallow the delete operator with computed key expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    '@typescript-eslint/no-dynamic-delete': 'error',

    // Disallow Empty Functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': suggestions['no-empty-function'],

    // Disallow the declaration of empty interfaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the any type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    // EXPLANATION: Too strict
    '@typescript-eslint/no-explicit-any': 'off',

    // Disallow extra non-null assertion
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Disallow unnecessary parentheses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': layoutFormatting['no-extra-parens'],

    // Forbids the use of classes as namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': 'error',

    // Disallow unnecessary semicolons
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': suggestions['no-extra-semi'],

    // Requires Promise-like values to be handled appropriately
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': 'error',

    // Disallow iterating over an array with a for-in loop
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallow the use of eval()-like methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],

    // Disallow this keywords outside of classes or class-like objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': layoutFormatting['no-invalid-this'],

    // Disallows usage of void type outside of generic or return types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    '@typescript-eslint/no-invalid-void-type': 'error',

    // Disallow literal numbers that lose precision
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': possibleProblems['no-loss-of-precision'],

    // Disallows magic numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    // EXPLANATION: Too strict
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    // Enforce valid definition of new and constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
    '@typescript-eslint/no-misused-new': 'error',

    // Avoid using promises in places not designed to handle them
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: true, checksConditionals: true }],

    // Disallow the use of custom TypeScript modules and namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],

    // Disallows non-null assertions using the ! postfix operator
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    // EXPLANATION: ! postfix operator is usually quite useful
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disallows using a non-null assertion after an optional chain expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    // EXPLANATION: ! postfix operator is usually quite useful
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

    // Disallow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': 'error',

    // Disallows invocation of require()
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],

    // Disallow throwing literals as exceptions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    '@typescript-eslint/no-throw-literal': 'error',

    // Disallow the use of type aliases
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
    // EXPLANATION: conflicts with @typescript-eslint/consistent-type-definitions
    '@typescript-eslint/no-type-alias': 'off',

    // Flags unnecessary equality comparisons against boolean literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // Prevents conditionals where the type is always truthy or always falsy
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    '@typescript-eslint/no-unnecessary-condition': 'error',

    // Warns when a namespace qualifier is unnecessary
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // Warns if an explicitly specified type argument is the default for that type parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // Warns if a type assertion does not change the type of an expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallows assigning any to variables and properties
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Disallows calling an any type value
    //https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    '@typescript-eslint/no-unsafe-call': 'error',

    // Disallows member access on any typed variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    '@typescript-eslint/no-unsafe-member-access': 'error',

    // Disallows returning any from a function
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
    // EXPLANATION: Sometimes there is no other way except for using "any" in
    // return
    '@typescript-eslint/no-unsafe-return': 'off',

    // Disallow unused expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.mds
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': suggestions['no-unused-expressions'],

    // Disallow unused variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    // Disabled due to the following issue: https://github.com/typescript-eslint/typescript-eslint/issues/1856
    '@typescript-eslint/no-unused-vars': 'off',
    // EXPLANATION: Typescript handles it by itself
    '@typescript-eslint/no-unused-vars-experimental': 'off',

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ...possibleProblems['no-use-before-define'][1],
        typedefs: true,
      },
    ],

    // Disallow unnecessary constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallows the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    // EXPLANATION: handled by @typescript-eslint/no-require-imports
    '@typescript-eslint/no-var-requires': 'off',

    // Prefer usage of as const over literal type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
    '@typescript-eslint/prefer-as-const': 'error',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': 'error',

    // Use function types instead of interfaces with call signatures
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
    '@typescript-eslint/prefer-function-type': 'error',

    // Enforce includes method over indexOf method
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
    '@typescript-eslint/prefer-includes': 'error',

    // Require that all enum members be literal values to prevent unintended enum member name shadow issues
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    // EXPLANATION: Unusable with ES modules
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    // Prefer using concise optional chain expressions instead of chained logical ands
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Requires that private members are marked as readonly if they're never modified outside of the constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
    '@typescript-eslint/prefer-readonly': 'error',

    // Requires that function parameters are typed as readonly to prevent
    // accidental mutation of inputs
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    // EXPLANATION: Works weird, too irritating.
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Prefer using type parameter when calling Array#reduce instead of casting
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // Prefer RegExp#exec() over String#match() if no global flag is provided
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    '@typescript-eslint/prefer-regexp-exec': 'error',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // Prefer using type parameter when calling Array#reduce instead of casting
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Requires any function or method that returns a Promise to be marked async
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
    '@typescript-eslint/promise-function-async': 'error',

    // Enforce template literal expressions to be of string type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    '@typescript-eslint/restrict-template-expressions': 'error',

    // Enforces consistent returning of awaited values
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    'no-return-await': 'off',
    '@typescript-eslint/return-await': suggestions['no-return-await'],

    // Enforces consistent spacing before function parenthesis
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': layoutFormatting['space-before-function-paren'],

    // Exhaustiveness checking in switch with union type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    quotes: 'off',
    '@typescript-eslint/quotes': layoutFormatting['quotes'],

    // Enforce giving compare argument to Array#sort
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    '@typescript-eslint/require-array-sort-compare': 'error',

    // Disallow async functions which have no await expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    // When adding two variables, operands must both be of type number or of type string
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Require or disallow semicolons instead of ASI
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    semi: 'off',
    '@typescript-eslint/semi': layoutFormatting['semi'],

    // Restricts the types allowed in boolean expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    // EXPLANATION: Too strict
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'never', types: 'never', lib: 'never' }],

    // Require consistent spacing around type annotations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    // handled by Prettier
    '@typescript-eslint/type-annotation-spacing': 'off',

    // Requires type annotations to exist
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
    // EXPLANATION: Typescript compiler rules are preferred
    '@typescript-eslint/typedef': 'off',

    // Enforces unbound methods are called with their expected scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
    '@typescript-eslint/unified-signatures': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Require explicit accessibility modifiers on class properties and methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowArgumentsExplicitlyTypedAsAny: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],

        // Require explicit return types on functions and class methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        // EXPLANATION: @typescript-eslint/explicit-module-boundary-types is
        // enough; any other function type can be handled by the TS type system.
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Require explicit accessibility modifiers on class properties and methods
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
      },
    },
    {
      files: ['*.spec.js', '*.spec.ts', '*.test.js', '*.test.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      },
    },
  },
};
