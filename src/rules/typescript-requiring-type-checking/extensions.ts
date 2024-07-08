const suggestions = require("../eslint/suggestions").rules;
export = {
    rules: {
        // Enforce dot notation whenever possible
        // https://typescript-eslint.io/rules/dot-notation
        "@typescript-eslint/dot-notation": suggestions["dot-notation"],
        // Disallow the use of eval()-like methods
        // https://typescript-eslint.io/rules/no-implied-eval
        "@typescript-eslint/no-implied-eval": suggestions["no-implied-eval"],
        // Disallow throwing literals as exceptions
        // https://typescript-eslint.io/rules/no-throw-literal
        "@typescript-eslint/only-throw-error": suggestions["no-throw-literal"],
        // Require destructuring from arrays and/or objects
        // https://typescript-eslint.io/rules/prefer-destructuring
        "@typescript-eslint/prefer-destructuring": "error",
        // Require using Error objects as Promise rejection reasons
        // https://typescript-eslint.io/rules/prefer-promise-reject-errors
        "@typescript-eslint/prefer-promise-reject-errors": suggestions["prefer-promise-reject-errors"],
        // Disallow async functions which have no await expression
        // https://typescript-eslint.io/rules/require-await
        "@typescript-eslint/require-await": suggestions["require-await"],
        "dot-notation": "off",
        "no-implied-eval": "off",
        "no-throw-literal": "off",
        "prefer-destructuring": "off",
        "prefer-promise-reject-errors": "off",
        "require-await": "off"
    },
} as const;
