export = {
    rules: {
        // Require that member overloads be consecutive
        // https://typescript-eslint.io/rules/adjacent-overload-signatures
        "@typescript-eslint/adjacent-overload-signatures": "error",
        // Requires using either T[] or Array<T> for arrays
        // https://typescript-eslint.io/rules/array-type
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array-simple",
                readonly: "array-simple",
            },
        ],
        // Bans // @ts-<directive> comments from being used or requires descriptions
        // after directive
        // https://typescript-eslint.io/rules/ban-ts-comment
        // EXPLANATION: Complete banning is too strict, but requiring the
        // description is a nice idea
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": "allow-with-description",
                minimumDescriptionLength: 3,
            },
        ],
        // Bans // tslint:<rule-flag> comments from being used.
        // https://typescript-eslint.io/rules/ban-tslint-comment
        "@typescript-eslint/ban-tslint-comment": "error",
        // Bans specific types from being used
        // https://typescript-eslint.io/rules/ban-types
        "@typescript-eslint/ban-types": "error",
        // Ensures that literals on classes are exposed in a consistent style
        // https://typescript-eslint.io/rules/class-literal-property-style
        "@typescript-eslint/class-literal-property-style": ["error", "fields"],
        // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
        // https://typescript-eslint.io/rules/consistent-generic-constructors
        "@typescript-eslint/consistent-generic-constructors": "error",
        // Enforce or disallow the use of the record type.
        // https://typescript-eslint.io/rules/consistent-indexed-object-style
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
        // Enforces consistent usage of type assertions
        // https://typescript-eslint.io/rules/consistent-type-assertions
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            { assertionStyle: "as", objectLiteralTypeAssertions: "allow-as-parameter" },
        ],
        // Consistent with type definition either interface or type
        // https://typescript-eslint.io/rules/consistent-type-definitions
        "@typescript-eslint/consistent-type-definitions": "off",
        // Enforces consistent usage of type imports
        // https://typescript-eslint.io/rules/consistent-type-imports
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports", disallowTypeAnnotations: true, fixStyle: "inline-type-imports" },
        ],
        // Require a consistent member declaration order
        // https://typescript-eslint.io/rules/member-ordering
        // EXPLANATION: To activate the opinionated member sorting, add `vaadin/sort`
        // rule set.
        "@typescript-eslint/member-ordering": "off",
        // Enforces using a particular method signature syntax
        // https://typescript-eslint.io/rules/method-signature-style
        "@typescript-eslint/method-signature-style": ["error", "method"],
        // Disallow using the delete operator on array values
        // https://typescript-eslint.io/rules/no-array-delete
        "@typescript-eslint/no-array-delete": "error",
        // Disallow non-null assertion in locations that may be confusing
        // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        // Disallow duplicate enum member values.
        // https://typescript-eslint.io/rules/no-duplicate-enum-values
        "@typescript-eslint/no-duplicate-enum-values": "error",
        // Disallow the "delete" operator with computed key expressions
        // https://typescript-eslint.io/rules/no-dynamic-delete
        "@typescript-eslint/no-dynamic-delete": "error",
        // Disallow the declaration of empty interfaces
        // https://typescript-eslint.io/rules/no-empty-interface
        "@typescript-eslint/no-empty-interface": "error",
        // Disallow usage of any type
        // https://typescript-eslint.io/rules/no-explicit-any
        // EXPLANATION: Too strict
        "@typescript-eslint/no-explicit-any": "off",
        // Disallow extra non-null assertion
        // https://typescript-eslint.io/rules/no-extra-non-null-assertion
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        // Forbids the use of classes as namespaces
        // https://typescript-eslint.io/rules/no-extraneous-class
        "@typescript-eslint/no-extraneous-class": "error",
        // Enforce the use of top-level import type qualifier when an import
        // only has specifiers with inline type qualifiers.
        // https://typescript-eslint.io/rules/no-import-type-side-effects
        "@typescript-eslint/no-import-type-side-effects": "error",
        // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
        // https://typescript-eslint.io/rules/no-inferrable-types
        "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true, ignoreProperties: true }],
        // Disallows usage of void type outside of generic or return types
        // https://typescript-eslint.io/rules/no-invalid-void-type
        "@typescript-eslint/no-invalid-void-type": "error",
        // Enforce valid definition of new and constructor
        // https://typescript-eslint.io/rules/no-misused-new
        "@typescript-eslint/no-misused-new": "error",
        // Disallow the use of custom TypeScript modules and namespaces
        // https://typescript-eslint.io/rules/no-namespace
        "@typescript-eslint/no-namespace": ["error", { allowDefinitionFiles: true }],
        // Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
        // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        // Disallows using a non-null assertion after an optional chain expression
        // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        // Disallows non-null assertions using the ! postfix operator
        // https://typescript-eslint.io/rules/no-non-null-assertion
        // EXPLANATION: ! postfix operator is usually quite useful
        "@typescript-eslint/no-non-null-assertion": "off",
        // Disallows invocation of require()
        // https://typescript-eslint.io/rules/no-require-imports
        "@typescript-eslint/no-require-imports": "error",
        // Disallow aliasing this
        // https://typescript-eslint.io/rules/no-this-alias
        "@typescript-eslint/no-this-alias": ["error", { allowDestructuring: true, allowedNames: ["self"] }],
        // Disallows unnecessary constraints on generic types
        // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        // Disallow unsafe declaration merging.
        // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
        // Too strict
        "@typescript-eslint/no-unsafe-declaration-merging": "off",
        // Disallow empty exports that don't change anything in a module file
        // https://typescript-eslint.io/rules/no-useless-empty-export
        "@typescript-eslint/no-useless-empty-export": "error",
        // Disallows the use of require statements except in import statements
        // https://typescript-eslint.io/rules/no-var-requires
        // EXPLANATION: handled by @typescript-eslint/no-require-imports
        "@typescript-eslint/no-var-requires": "off",
        // Require or disallow parameter properties in class constructors.
        // https://typescript-eslint.io/rules/parameter-properties
        "@typescript-eslint/parameter-properties": "error",
        // Prefer usage of as const over literal type
        // https://typescript-eslint.io/rules/prefer-as-const
        "@typescript-eslint/prefer-as-const": "error",
        // Prefer initializing each enums member value
        // https://typescript-eslint.io/rules/prefer-enum-initializers
        "@typescript-eslint/prefer-enum-initializers": "error",
        // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        // https://typescript-eslint.io/rules/prefer-for-of
        "@typescript-eslint/prefer-for-of": "error",
        // Use function types instead of interfaces with call signatures
        // https://typescript-eslint.io/rules/prefer-function-type
        "@typescript-eslint/prefer-function-type": "error",
        // Require that all enum members be literal values to prevent unintended enum member name shadow issues
        // https://typescript-eslint.io/rules/prefer-literal-enum-member
        "@typescript-eslint/prefer-literal-enum-member": ["error", { allowBitwiseExpressions: true }],
        // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
        // https://typescript-eslint.io/rules/prefer-namespace-keyword
        // EXPLANATION: Unusable with ES modules
        "@typescript-eslint/prefer-namespace-keyword": "off",
        // Prefer using concise optional chain expressions instead of chained logical ands
        // https://typescript-eslint.io/rules/prefer-optional-chain
        "@typescript-eslint/prefer-optional-chain": "error",
        // Sets preference level for triple slash directives versus ES6-style import declarations
        // https://typescript-eslint.io/rules/triple-slash-reference
        "@typescript-eslint/triple-slash-reference": ["error", { path: "never", types: "never", lib: "never" }],
        // Requires type annotations to exist
        // https://typescript-eslint.io/rules/typedef
        // EXPLANATION: Typescript compiler rules are preferred
        "@typescript-eslint/typedef": "off",
        // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
        // https://typescript-eslint.io/rules/unified-signatures
        "@typescript-eslint/unified-signatures": "error"
    },
    overrides: [
        {
            // Use rules ONLY for TS(X) files and ignore JS(X)
            files: ["*.ts", "*.tsx"],
            rules: {
                // Require explicit return types on functions and class methods
                // https://typescript-eslint.io/rules/explicit-function-return-type
                // EXPLANATION: @typescript-eslint/explicit-module-boundary-types is
                // enough; any other function type can be handled by the TS type system.
                "@typescript-eslint/explicit-function-return-type": "off",
                // Require explicit accessibility modifiers on class properties and methods
                // https://typescript-eslint.io/rules/explicit-member-accessibility
                "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
                // Require explicit accessibility modifiers on class properties and methods
                // https://typescript-eslint.io/rules/explicit-member-accessibility
                "@typescript-eslint/explicit-module-boundary-types": [
                    "error",
                    {
                        allowArgumentsExplicitlyTypedAsAny: true,
                        allowDirectConstAssertionInArrowFunctions: true,
                        allowHigherOrderFunctions: true,
                        allowTypedFunctionExpressions: true,
                    },
                ]
            },
        },
    ],
} as const;
