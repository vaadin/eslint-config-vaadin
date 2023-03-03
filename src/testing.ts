export = {
  plugins: ['chai-friendly'],
  overrides: [
    {
      extends: ['./rules/testing'],
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
    },
  ],
} as const;
