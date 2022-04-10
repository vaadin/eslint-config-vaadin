const typescript = require('../../rules/typescript');
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

  const tsExistingRules = {
    ...typescript.rules,
    ...Object.assign({}, ...typescript.overrides.map(({ rules }) => rules)),
  };

  const result = checkRules(
    'typescript',
    {
      modernRules: [...supportedRules, ...extensionRules],
      existingRules: tsExistingRules,
    },
    {
      filterWrongSetRules(rule) {
        return !(
          rule in tsExistingRules &&
          tsExistingRules[rule] === 'off' &&
          `@typescript-eslint/${rule}` in tsExistingRules
        );
      },
    },
  );

  return `${header}\n\n${result}`;
};
