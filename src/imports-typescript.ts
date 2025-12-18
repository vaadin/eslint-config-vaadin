import { join } from 'path';
import { defineConfig, type Config } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import importX from 'eslint-plugin-import-x';
import rules from './rules/imports.js';
import { tsExtensions } from './utils.js';

const config: readonly Config[] = defineConfig({
  files: ['**/*.{ts,tsx,mts,cts}'],
  rules,
  plugins: {
    // @ts-expect-error: https://github.com/un-ts/eslint-plugin-import-x/issues/439
    'import-x': importX,
  },
  settings: {
    'import-x/resolver-next': [
      createTypeScriptImportResolver({
        alwaysTryTypes: true,
        project: join(process.cwd(), 'tsconfig.json'),
        extensions: tsExtensions,
      }),
    ],
  },
});

export default config;
