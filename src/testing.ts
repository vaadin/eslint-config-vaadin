const resolve = require('./utils/resolve.js');

export = {
  extends: ['./rules/testing'].map(resolve),
  overrides: [
    {
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
      },
    },
  ],
} as const;
