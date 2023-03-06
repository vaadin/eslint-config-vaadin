export = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Require that member overloads be consecutive
    // https://typescript-eslint.io/rules/adjacent-overload-signatures
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Requires using either T[] or Array<T> for arrays
    // https://typescript-eslint.io/rules/array-type
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],

    // Bans // @ts-<directive> comments from being used or requires descriptions
    // after directive
    // https://typescript-eslint.io/rules/ban-ts-comment
    // EXPLANATION: Complete banning is Too strict, but requiring the
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
    // https://typescript-eslint.io/rules/ban-tslint-comment
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Bans specific types from being used
    // https://typescript-eslint.io/rules/ban-types
    '@typescript-eslint/ban-types': 'error',

    // Ensures that literals on classes are exposed in a consistent style
    // https://typescript-eslint.io/rules/class-literal-property-style
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
    // https://typescript-eslint.io/rules/consistent-generic-constructors
    '@typescript-eslint/consistent-generic-constructors': 'error',

    // Enforce or disallow the use of the record type.
    // https://typescript-eslint.io/rules/consistent-indexed-object-style
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // Enforces consistent usage of type assertions
    // https://typescript-eslint.io/rules/consistent-type-assertions
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
    ],

    // Consistent with type definition either interface or type
    // https://typescript-eslint.io/rules/consistent-type-definitions
    '@typescript-eslint/consistent-type-definitions': 'off',

    // Enforces consistent usage of type imports
    // https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: true, fixStyle: 'inline-type-imports' },
    ],

    // Require a specific member delimiter style for interfaces and type literals
    // https://typescript-eslint.io/rules/member-delimiter-style
    // EXPLANATION: Handled by Prettier
    '@typescript-eslint/member-delimiter-style': 'off',

    // Require a consistent member declaration order
    // https://typescript-eslint.io/rules/member-ordering
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'signature',
          'call-signature',

          'static-field',
          'protected-static-field',
          'private-static-field',
          '#private-static-field',

          'static-initialization',

          ['static-get', 'static-set'],
          'static-method',

          ['protected-static-get', 'protected-static-set'],
          'protected-static-method',

          ['private-static-get', 'private-static-set'],
          'private-static-method',
          ['#private-static-get', '#private-static-set'],
          '#private-static-method',

          'field',

          'protected-field',

          'private-field',
          '#private-field',

          'constructor',
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          ['get', 'set'],

          ['protected-get', 'protected-set'],

          ['private-get', 'private-set'],
          ['#private-get', '#private-set'],

          'method',

          'protected-method',

          'private-method',
          '#private-method',
        ],
        interfaces: ['field', 'constructor', 'method'],
        typeLiterals: ['field', 'constructor', 'method'],
      },
    ],

    // Enforces using a particular method signature syntax
    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    // Disallow non-null assertion in locations that may be confusing
    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Disallow duplicate enum member values.
    // https://typescript-eslint.io/rules/no-duplicate-enum-values
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // Disallow the "delete" operator with computed key expressions
    // https://typescript-eslint.io/rules/no-dynamic-delete
    '@typescript-eslint/no-dynamic-delete': 'error',

    // Disallow the declaration of empty interfaces
    // https://typescript-eslint.io/rules/no-empty-interface
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of any type
    // https://typescript-eslint.io/rules/no-explicit-any
    // EXPLANATION: Too strict
    '@typescript-eslint/no-explicit-any': 'off',

    // Disallow extra non-null assertion
    // https://typescript-eslint.io/rules/no-extra-non-null-assertion
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Forbids the use of classes as namespaces
    // https://typescript-eslint.io/rules/no-extraneous-class
    '@typescript-eslint/no-extraneous-class': 'error',

    // Disallow usage of the implicit any type in catch clauses.
    // https://typescript-eslint.io/rules/no-implicit-any-catch
    // EXPLANATION: Deprecated
    '@typescript-eslint/no-implicit-any-catch': 'off',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://typescript-eslint.io/rules/no-inferrable-types
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],

    // Disallows usage of void type outside of generic or return types
    // https://typescript-eslint.io/rules/no-invalid-void-type
    '@typescript-eslint/no-invalid-void-type': 'error',

    // Enforce valid definition of new and constructor
    // https://typescript-eslint.io/rules/no-misused-new
    '@typescript-eslint/no-misused-new': 'error',

    // Disallow the use of custom TypeScript modules and namespaces
    // https://typescript-eslint.io/rules/no-namespace
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true }],

    // Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
    // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    // Disallows using a non-null assertion after an optional chain expression
    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallows non-null assertions using the ! postfix operator
    // https://typescript-eslint.io/rules/no-non-null-assertion
    // EXPLANATION: ! postfix operator is usually quite useful
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disallow the use of parameter properties in class constructors
    // https://typescript-eslint.io/rules/no-parameter-properties
    // EXPLANATION: Deprecated
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallows invocation of require()
    // https://typescript-eslint.io/rules/no-require-imports
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing this
    // https://typescript-eslint.io/rules/no-this-alias
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true, allowedNames: ['self'] }],

    // Disallow the use of type aliases
    // https://typescript-eslint.io/rules/no-type-alias
    // EXPLANATION: conflicts with @typescript-eslint/consistent-type-definitions
    '@typescript-eslint/no-type-alias': 'off',

    // Disallows unnecessary constraints on generic types
    // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // Disallow unsafe declaration merging.
    // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
    // Too strict
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',

    // Disallow empty exports that don't change anything in a module file
    // https://typescript-eslint.io/rules/no-useless-empty-export
    '@typescript-eslint/no-useless-empty-export': 'error',

    // Disallows the use of require statements except in import statements
    // https://typescript-eslint.io/rules/no-var-requires
    // EXPLANATION: handled by @typescript-eslint/no-require-imports
    '@typescript-eslint/no-var-requires': 'off',

    // Require or disallow parameter properties in class constructors.
    // https://typescript-eslint.io/rules/parameter-properties
    '@typescript-eslint/parameter-properties': 'error',

    // Prefer usage of as const over literal type
    // https://typescript-eslint.io/rules/prefer-as-const
    '@typescript-eslint/prefer-as-const': 'error',

    // Prefer initializing each enums member value
    // https://typescript-eslint.io/rules/prefer-enum-initializers
    '@typescript-eslint/prefer-enum-initializers': 'error',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // https://typescript-eslint.io/rules/prefer-for-of
    '@typescript-eslint/prefer-for-of': 'error',

    // Use function types instead of interfaces with call signatures
    // https://typescript-eslint.io/rules/prefer-function-type
    '@typescript-eslint/prefer-function-type': 'error',

    // Require that all enum members be literal values to prevent unintended enum member name shadow issues
    // https://typescript-eslint.io/rules/prefer-literal-enum-member
    '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://typescript-eslint.io/rules/prefer-namespace-keyword
    // EXPLANATION: Unusable with ES modules
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // Prefer using concise optional chain expressions instead of chained logical ands
    // https://typescript-eslint.io/rules/prefer-optional-chain
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Prefer using type parameter when calling Array#reduce instead of casting
    // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Enforce constituents of a type union/intersection to be sorted alphabetically
    // https://typescript-eslint.io/rules/sort-type-constituents
    '@typescript-eslint/sort-type-constituents': 'error',

    // Enforces that members of a type union/intersection are sorted alphabetically
    // https://typescript-eslint.io/rules/sort-type-union-intersection-members
    '@typescript-eslint/sort-type-union-intersection-members': 'error',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    // https://typescript-eslint.io/rules/triple-slash-reference
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'never', types: 'never', lib: 'never' }],

    // Require consistent spacing around type annotations
    // https://typescript-eslint.io/rules/type-annotation-spacing
    // handled by Prettier
    '@typescript-eslint/type-annotation-spacing': 'off',

    // Requires type annotations to exist
    // https://typescript-eslint.io/rules/typedef
    // EXPLANATION: Typescript compiler rules are preferred
    '@typescript-eslint/typedef': 'off',

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    // https://typescript-eslint.io/rules/unified-signatures
    '@typescript-eslint/unified-signatures': 'error',
  },
  overrides: [
    {
      // Use rules ONLY for TS(X) files and ignore JS(X)
      files: ['*.ts', '*.tsx'],
      rules: {
        // Require explicit return types on functions and class methods
        // https://typescript-eslint.io/rules/explicit-function-return-type
        // EXPLANATION: @typescript-eslint/explicit-module-boundary-types is
        // enough; any other function type can be handled by the TS type system.
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Require explicit accessibility modifiers on class properties and methods
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

        // Require explicit accessibility modifiers on class properties and methods
        // https://typescript-eslint.io/rules/explicit-member-accessibility
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowArgumentsExplicitlyTypedAsAny: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
  ],
} as const;
