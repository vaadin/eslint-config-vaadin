import type { Browser } from 'puppeteer';
import extensions from '../../src/rules/typescript/extensions.js';
import original from '../../src/rules/typescript/original.js';
import { checkRules, createHeader, init } from './utils.mjs';

const url = 'https://typescript-eslint.io/rules';

export default async function checkTypeScript(browser: Browser) {
  const page = await init(browser, url);

  const header = createHeader('@typescript-eslint', url);

  const [supportedRules, extensionRules] = await page.evaluate(() =>
    ['#supported-rules', '#extension-rules'].map((id: string) => {
      const table = window.q(id).findNextSibling('table');
      return table
        ? Array.from(table.querySelectorAll('td'), (td) => td.querySelector('a')?.textContent).filterEmptyItems()
        : [];
    }),
  );

  const existingOriginalRules = {
    ...original.rules,
    ...Object.assign({}, ...original.overrides.map(({ rules }) => rules)),
  };

  const results = [
    checkRules('Original Rules', {
      modernRules: supportedRules,
      existingRules: existingOriginalRules,
    }),
    checkRules(
      'Extension Rules',
      {
        modernRules: extensionRules,
        existingRules: extensions.rules,
      },
      {
        filterWrongSetRules(rule) {
          return (
            rule !== 'no-return-await' &&
            !(rule in extensions && extensions.rules[rule] === 'off' && `@typescript-eslint/${rule}` in extensions)
          );
        },
      },
    ),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
}
