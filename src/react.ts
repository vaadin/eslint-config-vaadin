import { defineConfig, type Config } from 'eslint/config';
import { fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import reactPerf from 'eslint-plugin-react-perf';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import jsxA11yRules from './rules/react/jsx-a11y.js';
import reactRules from './rules/react/react.js';
import reactPerfRules from './rules/react/react-perf.js';
import reactHooksRules from './rules/react/react-hooks.js';

const config: readonly Config[] = defineConfig({
  plugins: {
    // eslint-plugin-react still calls "context.getSourceCode()" and "context.getFilename()", which
    // ESLint 10 removed, so rules like "react/forward-ref-uses-ref" throw on load. Wrapping the
    // plugin restores those methods. Drop this once the plugin supports ESLint 10 natively:
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/3977
    react: fixupPluginRules(react),
    'react-hooks': reactHooks,
    'jsx-a11y': jsxA11y,
    'react-perf': reactPerf,
  },
  rules: {
    ...reactRules,
    ...jsxA11yRules,
    ...reactHooksRules,
    ...reactPerfRules,
  },
});

export default config;
