# eslint-config-vaadin

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Vaadin JavaScript style guide

## Installation

```sh
npm install --save-dev eslint-config-vaadin
```

or

```sh
yarn add --dev eslint-config-vaadin
```

## Usage

After you have installed `eslint-config-vaadin`, you should be able to extend the following configs in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

## Available Configs

### vaadin/javascript

A config that contains the JavaScript linting rules.

This config requires `vaadin/prettier` which must be added after any other configs.

```json5
{
  "extends": [
    "vaadin/javascript",
    // ... other project configs
    "vaadin/prettier"
  ]
}
```

### vaadin/typescript

A config that extends `vaadin/javascript` with the TypeScript linting rules.

This config requires `vaadin/prettier` which must be added after any other configs.

```json5
{
  "extends": [
    "vaadin/typescript",
    // ... other project configs
    "vaadin/prettier"
  ]
}
```

### vaadin/typescript-requiring-type-checking

A config that extends `vaadin/typescript` with the TypeScript linting rules that require type information.

Please note that adding this config to your project can significantly affect linting performance since it requires TypeScript to build the whole project before ESLint can do its linting.

This config requires `tsconfig.json` at the project root with the `include` section that includes all the files that are referenced in your project. If your `tsconfig.json` is located somewhere other than the project root, you can use the `parserOptions.project` property.

This config requires `vaadin/prettier` which must be added after any other configs.

```json5
{
  "parserOptions": {
    "project": "path/to/your/tsconfig.json"
  },
  "extends": [
    "vaadin/typescript-requiring-type-checking",
    // ... other project configs
    "vaadin/prettier"
  ]
}
```

### vaadin/lit

A config that contains the linting rules for tagged Lit templates.

This config is designed on top of the `eslint-plugin-lit` plugin.

This config is supposed to be used in combination with `vaadin/javascript` or `vaadin/typescript`.

```json
{
  "extends": [
    "vaadin/lit"
  ]
}
```

### vaadin/imports

A config that contains the linting rules for imports.

This config is designed on top of the `eslint-plugin-import` plugin. Please note that adding this config to your project can significantly affect linting performance.

This config is supposed to be used in combination with `vaadin/javascript` or `vaadin/typescript`.

```json
{
  "extends": [
    "vaadin/imports"
  ]
}
```

### vaadin/testing

A config that overrides some linting rules and sets up the `eslint-plugin-chai-friendly` plugin for test files.

This config is supposed to be used in combination with `vaadin/javascript` or `vaadin/typescript`.

```json
{
  "extends": [
    "vaadin/testing"
  ]
}
```

### vaadin/sort

A config that enables alphabetical sorting for objects, enums, JSX props, and exports. It serves as a substitute for the ESLint `sort-keys` rule, which lacks an auto-fixer. Please be aware that the ESLint team has a significant reason for not implementing an auto-fixer for this rule (see [here](https://github.com/eslint/eslint/issues/7714#issuecomment-265542433)). Use the config with caution.

```json
{
  "extends": [
    "vaadin/sort"
  ]
}
```

## Examples

### Lit + JavaScript

```json
{
  "extends": [
    "vaadin/javascript",
    "vaadin/lit",
    "vaadin/testing",
    "vaadin/prettier"
  ]
}
```

### Lit + TypeScript

```json
{
  "extends": [
    "vaadin/typescript",
    "vaadin/lit",
    "vaadin/testing",
    "vaadin/prettier"
  ]
}
```

Or, you can use a more strict config that requires type information:

```json
{
  "extends": [
    "vaadin/typescript-requiring-type-checking",
    "vaadin/lit",
    "vaadin/testing",
    "vaadin/prettier"
  ]
}
```

## License

Apache License 2.0
