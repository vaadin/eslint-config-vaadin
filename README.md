# eslint-config-vaadin

> ESLint [shareable config](https://eslint.org/docs/latest/extend/shareable-configs) for the Vaadin JavaScript style guide

## Installation

```sh
npm install --save-dev eslint prettier eslint-config-vaadin
```

or

```sh
yarn add --dev eslint prettier eslint-config-vaadin
```

This package requires ESLint 10 and Prettier 3.

## Usage

The configs use the ESLint [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) format. Import each config from `eslint-config-vaadin/<name>`. Each config is an array, so spread it into your `eslint.config.js`:

```js
import javascript from 'eslint-config-vaadin/javascript';
import prettier from 'eslint-config-vaadin/prettier';

export default [
  ...javascript,
  // ... other project configs
  ...prettier,
];
```

## Available Configs

### vaadin/javascript

A config that contains the JavaScript linting rules.

This config requires `vaadin/prettier` which must be added after any other configs.

```js
import javascript from 'eslint-config-vaadin/javascript';
import prettier from 'eslint-config-vaadin/prettier';

export default [
  ...javascript,
  // ... other project configs
  ...prettier,
];
```

### vaadin/typescript

A config that extends `vaadin/javascript` with the TypeScript linting rules.

This config requires `vaadin/prettier` which must be added after any other configs.

```js
import prettier from 'eslint-config-vaadin/prettier';
import typescript from 'eslint-config-vaadin/typescript';

export default [
  ...typescript,
  // ... other project configs
  ...prettier,
];
```

### vaadin/typescript-requiring-type-checking

A config that extends `vaadin/typescript` with the TypeScript linting rules that require type information.

Please note that adding this config to your project can significantly affect linting performance since it requires TypeScript to build the whole project before ESLint can do its linting.

This config uses the typescript-eslint [project service](https://typescript-eslint.io/packages/parser#projectservice). The project service uses the nearest `tsconfig.json` of each linted file. If no `tsconfig.json` includes a linted file, list the file in the `allowDefaultProject` option.

This config requires `vaadin/prettier` which must be added after any other configs.

```js
import prettier from 'eslint-config-vaadin/prettier';
import typescript from 'eslint-config-vaadin/typescript-requiring-type-checking';

export default [
  ...typescript,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.js'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // ... other project configs
  ...prettier,
];
```

### vaadin/lit

A config that contains the linting rules for tagged Lit templates.

This config is designed on top of the `eslint-plugin-lit` plugin.

This config is supposed to be used in combination with `vaadin/javascript` or `vaadin/typescript`.

```js
import lit from 'eslint-config-vaadin/lit';

export default [...lit];
```

### vaadin/imports

A config that contains the linting rules for imports in JavaScript files.

This config is designed on top of the `eslint-plugin-import-x` plugin. Please note that adding this config to your project can significantly affect linting performance.

This config is supposed to be used in combination with `vaadin/javascript` or `vaadin/typescript`.

```js
import imports from 'eslint-config-vaadin/imports';

export default [...imports];
```

### vaadin/imports-typescript

A config that contains the linting rules for imports in TypeScript files.

This config applies the `vaadin/imports` rules to TypeScript files. It resolves imports with the `tsconfig.json` in the current working directory.

This config is supposed to be used in combination with `vaadin/typescript`.

```js
import importsTypescript from 'eslint-config-vaadin/imports-typescript';

export default [...importsTypescript];
```

### vaadin/react

A config that contains the linting rules for React.

This config is designed on top of the following plugins:

- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react-perf`

Set the React version in the `settings.react.version` option. Otherwise, `eslint-plugin-react` reports a warning.

This config is supposed to be used in combination with `vaadin/javascript` or `vaadin/typescript`.

```js
import react from 'eslint-config-vaadin/react';

export default [
  ...react,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
```

### vaadin/react-perf

A config that contains only the React performance rules of the `eslint-plugin-react-perf` plugin.

The `vaadin/react` config already includes these rules.

```js
import reactPerf from 'eslint-config-vaadin/react-perf';

export default [...reactPerf];
```

### vaadin/testing

A config that overrides some linting rules and sets up the `eslint-plugin-chai-friendly` plugin for test files.

This config applies to the `*.test.*` and `*.spec.*` files.

This config is supposed to be used in combination with `vaadin/javascript` or `vaadin/typescript`.

```js
import testing from 'eslint-config-vaadin/testing';

export default [...testing];
```

### vaadin/sort

A config that enables alphabetical sorting for objects, enums, JSX props, and exports. It serves as a substitute for the ESLint `sort-keys` rule, which lacks an auto-fixer. Please be aware that the ESLint team has a significant reason for not implementing an auto-fixer for this rule (see [here](https://github.com/eslint/eslint/issues/7714#issuecomment-265542433)). Use the config with caution.

This config also orders class members with the `@typescript-eslint/member-ordering` rule. It requires `vaadin/typescript`.

```js
import sort from 'eslint-config-vaadin/sort';

export default [...sort];
```

## Examples

### Lit + JavaScript

```js
import javascript from 'eslint-config-vaadin/javascript';
import lit from 'eslint-config-vaadin/lit';
import prettier from 'eslint-config-vaadin/prettier';
import testing from 'eslint-config-vaadin/testing';

export default [...javascript, ...lit, ...testing, ...prettier];
```

### Lit + TypeScript

```js
import lit from 'eslint-config-vaadin/lit';
import prettier from 'eslint-config-vaadin/prettier';
import testing from 'eslint-config-vaadin/testing';
import typescript from 'eslint-config-vaadin/typescript';

export default [...typescript, ...lit, ...testing, ...prettier];
```

Or, you can use a more strict config that requires type information:

```js
import lit from 'eslint-config-vaadin/lit';
import prettier from 'eslint-config-vaadin/prettier';
import testing from 'eslint-config-vaadin/testing';
import typescript from 'eslint-config-vaadin/typescript-requiring-type-checking';

export default [...typescript, ...lit, ...testing, ...prettier];
```

### React + TypeScript

```js
import prettier from 'eslint-config-vaadin/prettier';
import react from 'eslint-config-vaadin/react';
import testing from 'eslint-config-vaadin/testing';
import typescript from 'eslint-config-vaadin/typescript';

export default [
  ...typescript,
  ...react,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...testing,
  ...prettier,
];
```

## License

Apache License 2.0
