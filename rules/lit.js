module.exports = {
  plugins: ['lit'],
  rules: {
    // Disallows unencoded HTML entities in attribute values
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/attribute-value-entities.md
    'lit/attribute-value-entities': 'error',

    // Disallows invalid binding positions in templates
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/binding-positions.md
    'lit/binding-positions': 'error',

    // Disallows duplicate names in template bindings
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-duplicate-template-bindings.md
    'lit/no-duplicate-template-bindings': 'error',

    // Disallows invalid escape sequences in template strings
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-invalid-escape-sequences.md
    'lit/no-invalid-escape-sequences': 'error',

    // Disallows invalid HTML in templates
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-invalid-html.md
    'lit/no-invalid-html': 'error',

    // Detects usages of legacy binding syntax
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-legacy-template-syntax.md
    'lit/no-legacy-template-syntax': 'error',

    // Disallows usages of "non-public" property bindings
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-private-properties.md
    'lit/no-private-properties': 'error',

    // Disallows property changes in the update lifecycle method
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-property-change-update.md
    // EXPLANATION: It is about lit-element, which is not supported by this
    // config by now
    'lit/no-property-change-update': 'off',

    // Disallows arrow functions in templates
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-template-arrow.md
    // EXPLANATION: Due to lit-html architecture this rule is redundant
    'lit/no-template-arrow': 'off',

    // Disallows .bind in templates
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-template-bind.md
    // EXPLANATION: Due to lit-html architecture this rule is redundant
    'lit/no-template-bind': 'error',

    // Disallows array .map in templates
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-template-map.md
    // EXPLANATION: Too strict
    'lit/no-template-map': 'off',

    // Disallows redundant literal values in templates
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-useless-template-literals.md
    'lit/no-useless-template-literals': 'error',

    // Detects usages of the value attribute
    // https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-value-attribute.md
    'lit/no-value-attribute': 'error',
  },
};
