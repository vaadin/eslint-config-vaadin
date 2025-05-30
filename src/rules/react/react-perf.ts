import type { Linter } from 'eslint';
const rules: Linter.RulesRecord = {
  // Prevent JSX that are local to the current method from being used as values of JSX props.
  // https://github.com/cvazac/eslint-plugin-react-perf/blob/master/docs/rules/jsx-no-jsx-as-prop.md
  // EXPLANATION: We use it pretty often in our codebase; it doesn't harm performance too much.
  'react-perf/jsx-no-jsx-as-prop': 'off',
  // Prevent Arrays that are local to the current method from being used as values of JSX props.
  // https://github.com/cvazac/eslint-plugin-react-perf/blob/master/docs/rules/jsx-no-new-array-as-prop.md
  'react-perf/jsx-no-new-array-as-prop': 'error',
  // Prevent Functions that are local to the current method from being used as values of JSX props.
  // https://github.com/cvazac/eslint-plugin-react-perf/blob/master/docs/rules/jsx-no-new-function-as-prop.md
  // EXPLANATION: We use it pretty often in our codebase; it doesn't harm performance too much.
  'react-perf/jsx-no-new-function-as-prop': 'off',
  // Prevent JSX that are local to the current method from being used as values of JSX props
  // https://github.com/cvazac/eslint-plugin-react-perf/blob/master/docs/rules/jsx-no-jsx-as-prop.md
  'react-perf/jsx-no-new-object-as-prop': 'error',
};
export default rules;
