import type { Linter } from 'eslint';
import possibleProblems, { noUseBeforeDefineOptions } from '../eslint/possible-problems.js';
import suggestions from '../eslint/suggestions.js';

export const common: Linter.RulesRecord = {
  '@typescript-eslint/class-methods-use-this': [
    'error',
    {
      ignoreOverrideMethods: true,
      ignoreClassesThatImplementAnInterface: true,
    },
  ],
  // Enforce default parameters to be last
  // https://typescript-eslint.io/rules/default-param-last
  '@typescript-eslint/default-param-last': suggestions['default-param-last'] ?? 'off',
  // Require or disallow initialization in variable declarations
  // https://typescript-eslint.io/rules/init-declarations
  '@typescript-eslint/init-declarations': suggestions['init-declarations'] ?? 'off',
  '@typescript-eslint/max-params': suggestions['max-params'] ?? 'off',
  // Disallow generic Array constructors
  // https://typescript-eslint.io/rules/no-array-constructor
  '@typescript-eslint/no-array-constructor': 'error',
  // Disallow duplicate class members
  // https://typescript-eslint.io/rules/no-dupe-class-members
  '@typescript-eslint/no-dupe-class-members': possibleProblems['no-dupe-class-members'] ?? 'off',
  // Disallow Empty Functions
  // https://typescript-eslint.io/rules/no-empty-function
  '@typescript-eslint/no-empty-function': suggestions['no-empty-function'] ?? 'off',
  // Disallow this keywords outside of classes or class-like objects
  // https://typescript-eslint.io/rules/no-invalid-this
  '@typescript-eslint/no-invalid-this': suggestions['no-invalid-this'] ?? 'off',
  // Disallow function declarations that contain unsafe references inside loop statements
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-loop-func
  '@typescript-eslint/no-loop-func': suggestions['no-loop-func'] ?? 'off',
  // Disallows magic numbers
  // https://typescript-eslint.io/rules/no-magic-numbers
  // EXPLANATION: Too strict
  '@typescript-eslint/no-magic-numbers': 'off',
  // Disallow variable redeclaration
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare
  '@typescript-eslint/no-redeclare': suggestions['no-redeclare'] ?? 'off',
  // Disallow specified modules when loaded by import
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-imports
  '@typescript-eslint/no-restricted-imports': suggestions['no-restricted-imports'] ?? 'off',
  // Disallow variable declarations from shadowing variables declared in the outer scope
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow
  '@typescript-eslint/no-shadow': suggestions['no-shadow'] ?? 'off',
  // Disallow unused expressions
  // https://typescript-eslint.io/rules/no-unused-expressionss
  '@typescript-eslint/no-unused-expressions': suggestions['no-unused-expressions'] ?? 'off',
  // Disallow unused private class members.
  // https://typescript-eslint.io/rules/no-unused-private-class-members
  '@typescript-eslint/no-unused-private-class-members': possibleProblems['no-unused-private-class-members'] ?? 'off',
  // Disallow unused variables
  // https://typescript-eslint.io/rules/no-unused-vars
  '@typescript-eslint/no-unused-vars': possibleProblems['no-unused-vars'] ?? 'off',
  // Disallow the use of variables before they are defined
  // https://typescript-eslint.io/rules/no-use-before-define
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      ...noUseBeforeDefineOptions,
      typedefs: true,
    },
  ],
  // Disallow unnecessary constructors
  // https://typescript-eslint.io/rules/no-useless-constructor
  '@typescript-eslint/no-useless-constructor': 'error',
  'class-methods-use-this': 'off',
  'consistent-return': 'off',
  'default-param-last': 'off',
  'init-declarations': 'off',
  'max-params': 'off',
  'no-dupe-class-members': 'off',
  'no-empty-function': 'off',
  'no-invalid-this': 'off',
  'no-loop-func': 'off',
  // Disallow literal numbers that lose precision
  // https://typescript-eslint.io/rules/no-loss-of-precision
  // DEPRECATED AND REMOVED FROM CONFIG
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  'no-shadow': 'off',
  'no-unused-expressions': 'off',
  'no-unused-private-class-members': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
};

// Use rules ONLY for TS(X) files and ignore JS(X)
export const specific: Linter.RulesRecord = {
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
};
