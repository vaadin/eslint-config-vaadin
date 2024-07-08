export = {
    rules: {
        "array-callback-return": "error",
        "constructor-super": "error",
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "except-parens"],
        "no-const-assign": "error",
        "no-constant-binary-expression": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        // handled by "import/no-duplicates"
        "no-duplicate-imports": "off",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        // use "no break" comment to describe that there shouldn't be break
        "no-fallthrough": ["error", { commentPattern: "^no\\sbreak" }],
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": ["error", { allowConstructorFlags: ["u", "y"] }],
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-new-native-nonconstructor": "error",
        // handled by "no-new-native-nonconstructor"
        "no-new-symbol": "off",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        // handled by Prettier
        "no-unexpected-multiline": "off",
        "no-unmodified-loop-condition": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
        "no-unused-private-class-members": "error",
        "no-unused-vars": [
            "error",
            {
                args: "all",
                argsIgnorePattern: "^_",
                caughtErrors: "all",
                caughtErrorsIgnorePattern: "^_",
                ignoreRestSiblings: true,
                vars: "all",
                varsIgnorePattern: "^_",
            },
        ],
        "no-use-before-define": ["error", { classes: true, functions: true, variables: true }],
        // TODO: enable when eslint v9 is adopted
        "no-useless-assignment": "off",
        "no-useless-backreference": "error",
        // appears to be too problematic to use
        "require-atomic-updates": "off",
        "use-isnan": "error",
        "valid-typeof": ["error", { requireStringLiterals: false }]
    },
} as const;
