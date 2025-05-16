import type { Linter } from 'eslint';
const rules: Linter.RulesRecord = {
  // Verify the list of dependencies for Hooks like useEffect and similar.
  'react-hooks/exhaustive-deps': 'error',
  // Enforce the Rules of Hooks.
  // https://react.dev/reference/rules/rules-of-hooks
  'react-hooks/rules-of-hooks': 'error',
};
export default rules;
