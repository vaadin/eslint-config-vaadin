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

    // Ensures that literals on classes are exposed in a consistent style
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
    // https://typescript-eslint.io/rules/consistent-generic-constructors
    '@typescript-eslint/consistent-generic-constructors': 'error',

    // Enforce or disallow the use of the record type.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // Enforces consistent usage of type assertions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
    ],

    // Enforces consistent usage of type exports (regular and type-only)
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-exports.md
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],

    // Enforces consistent usage of type imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

    // Consistent with type definition either interface or type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

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

    // Requires that .toString() is only called on objects which provide useful
    // information when stringified.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
    '@typescript-eslint/no-base-to-string': 'error',

    // Disallow non-null assertion in locations that may be confusing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Requires expressions of type void to appear in statement position.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    // too strict
    '@typescript-eslint/no-confusing-void-expression': 'off',

    // Disallow duplicate enum member values.
    // https://typescript-eslint.io/rules/no-duplicate-enum-values
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // Disallow the delete operator with computed key expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    '@typescript-eslint/no-dynamic-delete': 'error',

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

    // Forbids the use of classes as namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': 'error',

    // Requires Promise-like values to be handled appropriately
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': 'error',

    // Disallow iterating over an array with a for-in loop
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallow usage of the implicit any type in catch clauses.
    // https://typescript-eslint.io/rules/no-implicit-any-catch
    // deprecated
    '@typescript-eslint/no-implicit-any-catch': 'off',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],

    // Disallows usage of void type outside of generic or return types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    '@typescript-eslint/no-invalid-void-type': 'error',

    // Disallow the void operator except when used to discard a value.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md
    '@typescript-eslint/no-meaningless-void-operator': ['error', { checkNever: false }],

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

    // Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    // Disallows using a non-null assertion after an optional chain expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': 'error',

    // Disallow members of unions and intersections that do nothing or override type information.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redundant-type-constituents.md
    '@typescript-eslint/no-redundant-type-constituents': 'error',

    // Disallows invocation of require()
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true, allowedNames: ['self'] }],

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

    // Disallows unnecessary constraints on generic types
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // Disallows calling a function with an any type value
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
    // too strict
    '@typescript-eslint/no-unsafe-argument': 'off',

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

    // Disallow empty exports that don't change anything in a module file
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-empty-export.md
    '@typescript-eslint/no-useless-empty-export': 'error',

    // Disallows the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    // EXPLANATION: handled by @typescript-eslint/no-require-imports
    '@typescript-eslint/no-var-requires': 'off',

    // Prefers a non-null assertion over explicit type cast when possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    // Require or disallow parameter properties in class constructors.
    // https://typescript-eslint.io/rules/parameter-properties
    '@typescript-eslint/parameter-properties': 'error',

    // Prefer usage of as const over literal type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
    '@typescript-eslint/prefer-as-const': 'error',

    // Prefer initializing each enums member value
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
    '@typescript-eslint/prefer-enum-initializers': 'error',

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
    '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],

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

    // Enforce that this is used when only this type is returned
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
    '@typescript-eslint/prefer-return-this-type': 'error',

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

    // Enforces that members of a type union/intersection are sorted alphabetically
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
    '@typescript-eslint/sort-type-union-intersection-members': 'error',

    // Exhaustiveness checking in switch with union type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // Enforce giving compare argument to Array#sort
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    '@typescript-eslint/require-array-sort-compare': 'error',

    // When adding two variables, operands must both be of type number or of type string
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    '@typescript-eslint/restrict-plus-operands': 'error',

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
      // Use rules ONLY for TS(X) files and ignore JS(X)
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
  ],
};
