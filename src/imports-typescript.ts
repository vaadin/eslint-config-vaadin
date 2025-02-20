import { join } from 'path';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import importPlugin from 'eslint-plugin-import-x';
import tsEslint from 'typescript-eslint';
import rules from './rules/imports.js';
import { tsExtensions } from './utils.js';

export default tsEslint.config({
  files: ['**/*.{ts,tsx,mts,cts}'],
  rules,
  plugins: {
    'import-x': importPlugin,
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
