const original = require('../../rules/typescript/original');
const extensions = require('../../rules/typescript/extensions');
const { checkRules, init, createHeader } = require('./utils');

const url = 'https://typescript-eslint.io/rules';

module.exports = async (browser) => {
  const page = await init(browser, url);

  const header = createHeader('@typescript-eslint', url);

  const [supportedRules, extensionRules] = await page.evaluate(async () => {
    const extractRules = (id) => {
      const table = window.q(id).findNextSibling('table');

      return Array.from(table.querySelectorAll('td:first-child > a'), ({ textContent }) => textContent);
    };

    const supportedRules = extractRules('#supported-rules');
    const extensionRules = extractRules('#extension-rules');

    return [supportedRules, extensionRules];
  });

  const existingOriginalRules = {
    ...original.rules,
    ...Object.assign({}, ...original.overrides.map(({ rules }) => rules)),
  };

  const existingExtensionsRules = extensions.rules;

  const results = [
    checkRules('Original Rules', {
      modernRules: supportedRules,
      existingRules: existingOriginalRules,
    }),
    checkRules(
      'Extension Rules',
      {
        modernRules: extensionRules,
        existingRules: existingExtensionsRules,
      },
      {
        filterWrongSetRules(rule) {
          return rule !== 'no-return-await' && !(
            rule in existingExtensionsRules &&
            existingExtensionsRules[rule] === 'off' &&
            `@typescript-eslint/${rule}` in existingExtensionsRules
          );
        },
      },
    ),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
};
