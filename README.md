# eslint-config-vaadin

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Vaadin JavaScript style guide


## Installation

```
$ npm install --save-dev eslint-config-vaadin
```

or

```
$ yarn add --dev eslint-config-vaadin
```


## Usage

Once the `eslint-config-vaadin` package is installed, you can use it by specifying `vaadin` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "vaadin",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

Apache License 2.0
