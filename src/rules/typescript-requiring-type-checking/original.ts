export = {
  rules: {
    // Enforce consistent awaiting of returned promises
    // https://typescript-eslint.io/rules/return-await
    '@typescript-eslint/return-await': ['error', 'always'],
    // Disallows awaiting a value that is not a Promise
    // https://typescript-eslint.io/rules/await-thenable
    '@typescript-eslint/await-thenable': 'error',
    // Enforces consistent usage of type exports (regular and type-only)
    // https://typescript-eslint.io/rules/consistent-type-exports
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
    // Enforces naming conventions for everything across a codebase
    // https://typescript-eslint.io/rules/naming-convention
    // it is hard to configure this rule accurately
    '@typescript-eslint/naming-convention': 'off',
    // Requires that .toString() is only called on objects which provide useful
    // information when stringified.
    // https://typescript-eslint.io/rules/no-base-to-string
    '@typescript-eslint/no-base-to-string': 'error',
    // Requires expressions of type void to appear in statement position.
    // https://typescript-eslint.io/rules/no-confusing-void-expression
    // Too strict
    '@typescript-eslint/no-confusing-void-expression': 'off',
    // Disallow duplicate constituents of union or intersection types.
    // https://typescript-eslint.io/rules/no-duplicate-type-constituents
    '@typescript-eslint/no-duplicate-type-constituents': [
      'error',
      {
        ignoreIntersections: true,
      },
    ],
    // Requires Promise-like values to be handled appropriately
    // https://typescript-eslint.io/rules/no-floating-promises
    '@typescript-eslint/no-floating-promises': 'error',
    // Disallow iterating over an array with a for-in loop
    // https://typescript-eslint.io/rules/no-for-in-array
    '@typescript-eslint/no-for-in-array': 'error',
    // Disallow the void operator except when used to discard a value.
    // https://typescript-eslint.io/rules/no-meaningless-void-operator
    '@typescript-eslint/no-meaningless-void-operator': ['error', { checkNever: false }],
    // Avoid using promises in places not designed to handle them
    // https://typescript-eslint.io/rules/no-misused-promises
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: true, checksConditionals: true }],
    // Disallow enums from having both number and string members.
    // https://typescript-eslint.io/rules/no-mixed-enums
    '@typescript-eslint/no-mixed-enums': 'error',
    // Disallow members of unions and intersections that do nothing or override type information.
    // https://typescript-eslint.io/rules/no-redundant-type-constituents
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    // Flags unnecessary equality comparisons against boolean literals
    // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    // Prevents conditionals where the type is always truthy or always falsy
    // https://typescript-eslint.io/rules/no-unnecessary-condition
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // Warns when a namespace qualifier is unnecessary
    // https://typescript-eslint.io/rules/no-unnecessary-qualifier
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // Warns if an explicitly specified type argument is the default for that type parameter
    // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    // Warns if a type assertion does not change the type of expression
    // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // Disallows calling a function with an any type value
    // https://typescript-eslint.io/rules/no-unsafe-argument
    // Too strict
    '@typescript-eslint/no-unsafe-argument': 'off',
    // Disallows assigning any to variables and properties
    // https://typescript-eslint.io/rules/no-unsafe-assignment
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // Disallows calling an any type value
    // https://typescript-eslint.io/rules/no-unsafe-call
    '@typescript-eslint/no-unsafe-call': 'error',
    // Disallow comparing an enum value with a non-enum value.
    // https://typescript-eslint.io/rules/no-unsafe-enum-comparison
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    // Disallows member access on any typed variables
    // https://typescript-eslint.io/rules/no-unsafe-member-access
    '@typescript-eslint/no-unsafe-member-access': 'error',
    // Disallows returning any from a function
    // https://typescript-eslint.io/rules/no-unsafe-return
    // EXPLANATION: Sometimes there is no other way except for using "any" in
    // return
    '@typescript-eslint/no-unsafe-return': 'off',
    // Require unary negation to take a number
    // https://typescript-eslint.io/rules/no-unsafe-unary-minus
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    // Disallow unnecessary template expressions
    // https://typescript-eslint.io/rules/no-useless-template-literals
    '@typescript-eslint/no-useless-template-literals': 'error',
    // Prefers a non-null assertion over explicit type cast when possible
    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
    // https://typescript-eslint.io/rules/prefer-find
    '@typescript-eslint/prefer-find': 'error',
    // Enforce includes method over indexOf method
    // https://typescript-eslint.io/rules/prefer-includes
    '@typescript-eslint/prefer-includes': 'error',
    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // Requires that private members are marked as readonly if they're never modified outside the constructor
    // https://typescript-eslint.io/rules/prefer-readonly
    '@typescript-eslint/prefer-readonly': 'error',
    // Requires that function parameters are typed as readonly to prevent
    // accidental mutation of inputs
    // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
    // EXPLANATION: Works weird, too irritating.
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // Prefer using type parameter when calling Array#reduce instead of casting
    // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // Prefer RegExp#exec() over String#match() if no global flag is provided
    // https://typescript-eslint.io/rules/prefer-regexp-exec
    '@typescript-eslint/prefer-regexp-exec': 'error',
    // Enforce that this is used when only this type is returned
    // https://typescript-eslint.io/rules/prefer-return-this-type
    '@typescript-eslint/prefer-return-this-type': 'error',
    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // Requires any function or method that returns a Promise to be marked async
    // https://typescript-eslint.io/rules/promise-function-async
    '@typescript-eslint/promise-function-async': 'error',
    // Enforce giving compare argument to Array#sort
    // https://typescript-eslint.io/rules/require-array-sort-compare
    '@typescript-eslint/require-array-sort-compare': 'error',
    // When adding two variables, operands must both be of type number or of type string
    // https://typescript-eslint.io/rules/restrict-plus-operands
    '@typescript-eslint/restrict-plus-operands': 'error',
    // Enforce template literal expressions to be of string type
    // https://typescript-eslint.io/rules/restrict-template-expressions
    '@typescript-eslint/restrict-template-expressions': 'error',
    // Restricts the types allowed in boolean expressions
    // https://typescript-eslint.io/rules/strict-boolean-expressions
    // EXPLANATION: Too strict
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Exhaustiveness checking in switch with union type
    // https://typescript-eslint.io/rules/switch-exhaustiveness-check
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Enforces unbound methods are called with their expected scope
    // https://typescript-eslint.io/rules/unbound-method
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    // Enforce typing arguments in .catch() callbacks as unknown
    // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
  },
} as const;
