const resolve = require('./utils/resolve.js');

export = {
  overrides: [
    {
      extends: ['./rules/testing'].map(resolve),
      files: [
        '*.spec.js',
        '*.spec.ts',
        '*.spec.jsx',
        '*.spec.tsx',
        '*.test.js',
        '*.test.ts',
        '*.test.jsx',
        '*.test.tsx',
      ],
      rules: {
        'max-classes-per-file': 'off',
        'no-unused-expressions': 'off',
      },
    },
  ],
} as const;
