export = {
  plugin: ['perfectionist'],
  rules: {
    'perfectionist/sort-enums': ['error', { type: 'natural', order: 'asc', 'ignore-case': true }],
    'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc', 'ignore-case': true }],
    'perfectionist/sort-jsx-props': ['error', { type: 'natural', order: 'asc', 'ignore-case': true }],
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc', 'ignore-case': true }],
    'perfectionist/sort-objects': ['error', { type: 'natural', order: 'asc', 'ignore-case': true }],
  },
} as const;
