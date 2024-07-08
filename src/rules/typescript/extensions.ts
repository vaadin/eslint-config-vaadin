const possibleProblems = require('../eslint/possible-problems').rules;
const suggestions = require('../eslint/suggestions').rules;
export = {
  rules: {
    '@typescript-eslint/class-methods-use-this': [
      'error',
      {
        ignoreOverrideMethods: true,
        ignoreClassesThatImplementAnInterface: true,
      },
    ],
    '@typescript-eslint/consistent-return': suggestions['consistent-return'],
    '@typescript-eslint/default-param-last': suggestions['default-param-last'],
    '@typescript-eslint/init-declarations': suggestions['init-declarations'],
    '@typescript-eslint/max-params': suggestions['max-params'],
    // Disallow generic Array constructors
    // https://typescript-eslint.io/rules/no-array-constructor
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-array-delete': suggestions['no-array-delete'],
    '@typescript-eslint/no-dupe-class-members': possibleProblems['no-dupe-class-members'],
    '@typescript-eslint/no-empty-function': suggestions['no-empty-function'],
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
    'consistent-return': 'off',
    // Enforce default parameters to be last
    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',
    // Require or disallow initialization in variable declarations
    // https://typescript-eslint.io/rules/init-declarations
    'init-declarations': 'off',
    'max-params': 'off',
    // Disallow duplicate class members
    // https://typescript-eslint.io/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
    // Disallow Empty Functions
    // https://typescript-eslint.io/rules/no-empty-function
    'no-empty-function': 'off',
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
