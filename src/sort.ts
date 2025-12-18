import { defineConfig, type Config } from 'eslint/config';
import perfectionist from 'eslint-plugin-perfectionist';

const config: readonly Config[] = defineConfig({
  plugins: {
    perfectionist: perfectionist,
  },
  rules: {
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

    // sorting array will definitely break the code somewhere.
    'perfectionist/sort-array-includes': 'off',
    // handled by "@typescript-eslint/member-ordering"
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-enums': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }],
    // handled by "eslint-plugin-import" rules
    'perfectionist/sort-imports': 'off',
    // does not respect "@typescript-eslint/member-ordering" rules
    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-jsx-props': ['error', { type: 'natural', order: 'asc' }],
    // disabled by default; enable if necessary
    'perfectionist/sort-map-elements': 'off',
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],
    // handled by "eslint-plugin-import" rules
    'perfectionist/sort-named-imports': 'off',
    // does not respect "@typescript-eslint/member-ordering" rules
    'perfectionist/sort-object-types': 'off',
    'perfectionist/sort-objects': ['error', { type: 'natural', order: 'asc' }],
    // handled by "@typescript-eslint/sort-type-constituents" and "@typescript-eslint/sort-type-union-intersection-members"
    // rules
    'perfectionist/sort-union-types': 'off',
  },
});

export default config;
