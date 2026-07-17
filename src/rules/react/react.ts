import type { Linter } from 'eslint';

const rules: Linter.RulesRecord = {
  // Enforces consistent naming for boolean props.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/boolean-prop-naming': 'off',
  // Disallow usage of button elements without an explicit type attribute.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  'react/button-has-type': 'error',
  // Enforce using onChange or readonly attribute when checked is used.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
  'react/checked-requires-onchange-or-readonly': 'error',
  // Enforce all defaultProps have a corresponding non-required PropType
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  'react/default-props-match-prop-types': 'error',
  // Enforce consistent usage of destructuring assignment of props, state, and context.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  'react/destructuring-assignment': ['error', 'always'],
  // Disallow missing displayName in a React component definition.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
  'react/display-name': 'error',
  // Disallow certain props on components.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/forbid-component-props': 'off',
  // Disallow certain props on DOM Nodes.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/forbid-dom-props': 'off',
  // Disallow certain elements.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/forbid-elements': 'off',
  // Disallow using another component's propTypes.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // EXPLANATION: We don't use propTypes.
  'react/forbid-foreign-prop-types': 'off',
  // Disallow certain propTypes.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  // EXPLANATION: We don't use propTypes.
  'react/forbid-prop-types': 'off',
  // Require all forwardRef components include a ref parameter.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
  'react/forward-ref-uses-ref': 'error',
  // Enforce a specific function type for function components.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    },
  ],
  // Ensure destructuring and symmetric naming of useState hook value and setter variables.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
  'react/hook-use-state': ['error', { allowDestructuredState: true }],
  // Enforce sandbox attribute on iframe elements.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
  'react/iframe-missing-sandbox': 'error',
  // Enforce boolean attributes notation in JSX.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': ['error', 'never', { assumeUndefinedIsFalse: true }],
  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
  // EXPLANATION: Not useful
  'react/jsx-child-element-spacing': 'off',
  // Enforce closing bracket location in JSX.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-closing-bracket-location': 'off',
  // Enforce closing tag location for multiline JSX.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-closing-tag-location': 'off',
  // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes (react/jsx-curly-brace-presence)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
  // Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-curly-newline': 'off',
  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-curly-spacing': 'off',
  // Enforce or disallow spaces around equal signs in JSX attributes.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-equals-spacing': 'off',
  // Disallow file extensions that may contain JSX.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  // EXPLANATION: According to our convention, we don't use `.jsx` extension.
  'react/jsx-filename-extension': 'off',
  // Enforce proper position of the first property in JSX.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-first-prop-new-line': 'off',
  // Enforce shorthand or standard form for React fragments.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],
  // Enforce event handler naming conventions in JSX.
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/jsx-handler-names': 'off',
  // Enforce JSX indentation
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-indent': 'off',
  // Enforce props indentation in JSX (react/jsx-indent-props)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  'react/jsx-indent-props': 'error',
  // Disallow missing key props in iterators/collection literals (react/jsx-key)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  'react/jsx-key': 'error',
  // Enforce JSX maximum depth (react/jsx-max-depth)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  // EXPLANATION: Too strict
  'react/jsx-max-depth': 'off',
  // Enforce maximum of props on a single line in JSX (react/jsx-max-props-per-line)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-max-props-per-line': 'off',
  // Require or prevent a new line after jsx elements and expressions (react/jsx-newline)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-newline': 'error',
  // Disallow .bind() or arrow functions in JSX props (react/jsx-no-bind)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  // EXPLANATION: Not needed because we prefer React Hooks, and allow creating callbacks in components.
  'react/jsx-no-bind': 'off',
  // Disallow comments from being inserted as text nodes (react/jsx-no-comment-textnodes)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': 'error',
  // Disallows JSX context provider values from taking values that will cause needless rerenders (react/jsx-no-constructed-context-values)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  'react/jsx-no-constructed-context-values': 'error',
  // Disallow duplicate properties in JSX (react/jsx-no-duplicate-props)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': 'error',
  // Disallow problematic leaked values from being rendered (react/jsx-no-leaked-render)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
  'react/jsx-no-leaked-render': 'error',
  // Disallow usage of string literals in JSX (react/jsx-no-literals)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  'react/jsx-no-literals': ['error', { noStrings: true, ignoreProps: false, noAttributeStrings: true }],
  // Disallow usage of javascript: URLs (react/jsx-no-script-url)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  'react/jsx-no-script-url': 'error',
  // Disallow target="_blank" attribute without rel="noreferrer" (react/jsx-no-target-blank)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': 'error',
  // Disallow undeclared variables in JSX (react/jsx-no-undef)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': 'error',
  // Disallow unnecessary fragments (react/jsx-no-useless-fragment)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  'react/jsx-no-useless-fragment': 'error',
  // Require one JSX element per line (react/jsx-one-expression-per-line)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-one-expression-per-line': 'off',
  // Enforce PascalCase for user-defined JSX components (react/jsx-pascal-case)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': 'error',
  // Disallow multiple spaces between inline JSX props (react/jsx-props-no-multi-spaces)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
  // EXPLANATION: Handled by Prettier
  'react/jsx-props-no-multi-spaces': 'off',
  // Disallow JSX prop spreading the same identifier multiple times (react/jsx-props-no-spread-multi)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
  'react/jsx-props-no-spread-multi': 'error',
  // Disallow JSX prop spreading (react/jsx-props-no-spreading)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  // EXPLANATION: Overall, this rule is too strict; however, it can forbid "explicitSpread", so we keep
  // it enabled. The exceptions array is a workaround for eslint-plugin-react v7.37+ schema validation
  // which requires at least one exception when both html and custom are set to 'ignore'.
  'react/jsx-props-no-spreading': ['error', { html: 'ignore', custom: 'ignore', explicitSpread: 'enforce', exceptions: ['_ExplicitSpreadWorkaround'] }],
  // Enforce props alphabetical sorting (react/jsx-sort-props)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/jsx-sort-props': 'off',
  // Enforce whitespace in and around the JSX opening and closing brackets (react/jsx-tag-spacing)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  // EXPLANATION: Handled by Prettier.
  'react/jsx-tag-spacing': 'off',
  // Disallow React to be incorrectly marked as unused (react/jsx-uses-react)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  // EXPLANATION: We use jsx-runtime.
  'react/jsx-uses-react': 'off',
  // Disallow variables used in JSX to be incorrectly marked as unused (react/jsx-uses-vars)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': 'error',
  // Disallow missing parentheses around multiline JSX (react/jsx-wrap-multilines)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  // EXPLANATION: Handled by Prettier.
  'react/jsx-wrap-multilines': 'off',
  // Disallow when this.state is accessed within setState (react/no-access-state-in-setstate)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  'react/no-access-state-in-setstate': 'error',
  // Disallow adjacent inline elements not separated by whitespace (react/no-adjacent-inline-elements)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
  // EXPLANATION: Handled by Prettier.
  'react/no-adjacent-inline-elements': 'off',
  // Disallow usage of Array index in keys (react/no-array-index-key)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  'react/no-array-index-key': 'error',
  // Lifecycle methods should be methods on the prototype, not class fields (react/no-arrow-function-lifecycle)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
  'react/no-arrow-function-lifecycle': 'error',
  // Disallow passing of children as props (react/no-children-prop)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  'react/no-children-prop': 'error',
  // Disallow usage of dangerous JSX properties (react/no-danger)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'error',
  // Disallow when a DOM element is using both children and dangerouslySetInnerHTML (react/no-danger-with-children)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  'react/no-danger-with-children': 'error',
  // Disallow usage of deprecated methods (react/no-deprecated)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  'react/no-deprecated': 'error',
  // Disallow usage of setState in componentDidMount (react/no-did-mount-set-state)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
  'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
  // Disallow usage of setState in componentDidUpdate (react/no-did-update-set-state)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  'react/no-did-update-set-state': ['error', 'disallow-in-func'],
  // Disallow direct mutation of this.state (react/no-direct-mutation-state)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  'react/no-direct-mutation-state': 'error',
  // Disallow usage of findDOMNode (react/no-find-dom-node)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  'react/no-find-dom-node': 'error',
  // Disallow usage of invalid attributes (react/no-invalid-html-attribute)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
  'react/no-invalid-html-attribute': 'error',
  // Disallow usage of isMounted (react/no-is-mounted)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  'react/no-is-mounted': 'error',
  // Disallow multiple component definition per file (react/no-multi-comp)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
  // EXPLANATION: Too strict.
  'react/no-multi-comp': 'off',
  // Enforce that namespaces are not used in React elements (react/no-namespace)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
  'react/no-namespace': 'error',
  // Disallow usage of referential-type variables as default param in functional component (react/no-object-type-as-default-prop)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
  'react/no-object-type-as-default-prop': 'error',
  // Disallow usage of shouldComponentUpdate when extending React.PureComponent (react/no-redundant-should-component-update)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  'react/no-redundant-should-component-update': 'error',
  // Disallow usage of the return value of ReactDOM.render (react/no-render-return-value)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  'react/no-render-return-value': 'error',
  // Disallow usage of setState (react/no-set-state)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
  // EXPLANATION: Too strict.
  'react/no-set-state': 'off',
  // Disallow using string references (react/no-string-refs)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  'react/no-string-refs': 'error',
  // Disallow this from being used in stateless functional components (react/no-this-in-sfc)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
  'react/no-this-in-sfc': 'error',
  // Disallow common typos (react/no-typos)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  'react/no-typos': 'error',
  // Disallow unescaped HTML entities from appearing in markup (react/no-unescaped-entities)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  'react/no-unescaped-entities': 'error',
  // Disallow usage of unknown DOM property (react/no-unknown-property)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  'react/no-unknown-property': ['error', { requireDataLowercase: true }],
  // Disallow usage of unsafe lifecycle methods (react/no-unsafe)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
  'react/no-unsafe': ['error', { checkAliases: true }],
  // Disallow creating unstable components inside components (react/no-unstable-nested-components)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  // Disallow declaring unused methods of component class (react/no-unused-class-component-methods)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
  // EXPLANATION: Other rules will catch unused methods.
  'react/no-unused-class-component-methods': 'off',
  // Disallow definitions of unused propTypes (react/no-unused-prop-types)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  // EXPLANATION: We don't use prop types.
  'react/no-unused-prop-types': 'off',
  // Disallow definitions of unused state (react/no-unused-state)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
  // EXPLANATION: Other rules handles this case.
  'react/no-unused-state': 'off',
  // Disallow usage of setState in componentWillUpdate (react/no-will-update-set-state)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  'react/no-will-update-set-state': 'error',
  // Enforce ES5 or ES6 class for React Components (react/prefer-es6-class)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  'react/prefer-es6-class': ['error', 'always'],
  // Prefer exact proptype definitions (react/prefer-exact-props)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
  // EXPLANATION: Obsolete rule, it does not really applicable for TypeScript.
  'react/prefer-exact-props': 'off',
  // Enforce that props are read-only (react/prefer-read-only-props)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  'react/prefer-read-only-props': 'error',
  // Enforce stateless components to be written as a pure function (react/prefer-stateless-function)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
  // Disallow missing props validation in a React component definition (react/prop-types)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  'react/prop-types': 'error',
  // Disallow missing React when using JSX (react/react-in-jsx-scope)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  // EXPLANATION: We use jsx-runtime.
  'react/react-in-jsx-scope': 'off',
  // Enforce a defaultProps definition for every prop that is not a required prop (react/require-default-props)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  'react/require-default-props': 'error',
  // Enforce React components to have a shouldComponentUpdate method (react/require-optimization)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
  'react/require-optimization': 'error',
  // Enforce ES5 or ES6 class for returning value in render function (react/require-render-return)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  'react/require-render-return': 'error',
  // Disallow extra closing tags for components without children (react/self-closing-comp)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  'react/self-closing-comp': 'error',
  // Enforce component methods order (react/sort-comp)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/sort-comp': 'off',
  // Enforce defaultProps declarations alphabetical sorting (react/sort-default-props)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/sort-default-props': 'off',
  // Enforce propTypes declarations alphabetical sorting (react/sort-prop-types)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
  // EXPLANATION: Disabled by default, enable if you need it.
  'react/sort-prop-types': 'off',
  // Enforce class component state initialization style (react/state-in-constructor)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  // EXPLANATION: Too strict.
  'react/state-in-constructor': 'off',
  // Enforces where React component static properties should be positioned (react/static-property-placement)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  'react/static-property-placement': 'error',
  // Enforce style prop value is an object (react/style-prop-object)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  'react/style-prop-object': 'error',
  // Disallow void DOM elements (e.g. <img />, <br />) from receiving children (react/void-dom-elements-no-children)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  'react/void-dom-elements-no-children': 'error',
};

export default rules;
