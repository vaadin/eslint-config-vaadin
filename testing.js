module.exports = {
  extends: ['./rules/testing'].map(require.resolve),
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
};
