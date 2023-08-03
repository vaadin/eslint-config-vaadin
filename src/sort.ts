export = {
  plugin: ['perfectionist'],
  rules: {
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
} as const;
