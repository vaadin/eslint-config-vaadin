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

### eslint-config-vaadin

A config config that contains the JavaScript linting rules.

This config requires `eslint-config-vaadin/prettier` that must be added the very last i.e. after any other configs.

```json
{
  "extends": [
    "eslint-config-vaadin",
    // ... any other configs
    "eslint-config-vaadin/prettier"
  ]
}
```

### eslint-config-vaadin/typescript

A config that contains the TypeScript linting rules.

This config is designed on top of the default `eslint-config-vaadin` config which means that you don't have to enable the default config when using this one.

This config requires `tsconfig.json` at the project root with the `include` section that includes all the files that are referenced in your project. If your `tsconfig.json` is located somewhere other than the project root, you can use the `parserOptions.project` property.

This config requires `eslint-config-vaadin/prettier` that must be added the very last i.e. after any other configs.


```json
{
  "parserOptions": {
    "project": "path/to/your/tsconfig.json"
  },
  "extends": [
    "eslint-config-vaadin/typescript",
    // ... any other configs
    "eslint-config-vaadin/prettier"
  ]
}
```

### eslint-config-vaadin/lit

A config that contains the linting rules for tagged Lit templates.

This config is designed on top of the `eslint-plugin-lit` plugin.

This config is supposed to be used in combination with `eslint-config-vaadin` or `eslint-config-vaadin/typescript`.

```json
{
  "extends": [
    "eslint-config-vaadin/lit"
  ]
}
```

### eslint-config-vaadin/imports

A config that contains the linting rules for imports.

This config is designed on top of the `eslint-plugin-import` plugin. Please note that adding this config to your project can significantly affect linting performance.

This config is supposed to be used in combination with `eslint-config-vaadin` or `eslint-config-vaadin/typescript`.

```json
{
  "extends": [
    "eslint-config-vaadin/imports"
  ]
}
```

### eslint-config-vaadin/testing

A config that overrides some linting rules and sets up the `eslint-plugin-chai-friendly` plugin for test files.

This config is supposed to be used in combination with `eslint-config-vaadin` or `eslint-config-vaadin/typescript`.

```json
{
  "extends": [
    "eslint-config-vaadin/testing"
  ]
}
```

## Examples

### Lit + JavaScript

```json
{
  "extends": [
    "eslint-config-vaadin",
    "eslint-config-vaadin/lit",
    "eslint-config-vaadin/prettier"
  ]
}
```

### Lit + TypeScript

```json
{
  "extends": [
    "eslint-config-vaadin/typescript",
    "eslint-config-vaadin/lit",
    "eslint-config-vaadin/prettier"
  ]
}
```

## License

Apache License 2.0
