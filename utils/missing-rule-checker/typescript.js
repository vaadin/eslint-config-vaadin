const original = require('../../rules/typescript/original');
const extensions = require('../../rules/typescript/extensions');
const { checkRules, init, createHeader } = require('./utils');

const url = 'https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin';

module.exports = async (browser) => {
  const page = await init(browser, url);

  const header = createHeader('@typescript-eslint', url);

  const [supportedRules, extensionRules] = await page.evaluate(async () => {
    const extractRules = (id, heading) => {
      const table = window.q(id).closest(heading).findSibling('table');

      return Array.from(table.querySelectorAll('td:first-child'), ({ textContent }) => textContent);
    };

    const supportedRules = extractRules('#user-content-supported-rules', 'h2');
    const extensionRules = extractRules('#user-content-extension-rules', 'h3');

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
