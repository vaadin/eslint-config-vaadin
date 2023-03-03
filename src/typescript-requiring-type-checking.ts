export = {
  extends: [
    './typescript',
    './rules/typescript-requiring-type-checking/original',
    './rules/typescript-requiring-type-checking/extensions',
  ],
} as const;
