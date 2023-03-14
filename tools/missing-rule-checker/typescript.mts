import type { Browser } from 'puppeteer';
import _extensions from '../../src/rules/typescript/extensions.js';
import _original from '../../src/rules/typescript/original.js';
import _extensionsTC from '../../src/rules/typescript-requiring-type-checking/extensions.js';
import _originalTC from '../../src/rules/typescript-requiring-type-checking/original.js';
import { checkRules, createHeader, init } from './utils.mjs';

const url = 'https://typescript-eslint.io/rules';
const extensions = {
  rules: { ..._extensions.rules, ..._extensionsTC.rules },
  overrides: _extensions.overrides,
} as const;
const original = {
  rules: { ..._original.rules, ..._originalTC.rules },
  overrides: _original.overrides,
} as const;

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
            !(
              rule in extensions.rules &&
              extensions.rules[rule] === 'off' &&
              `@typescript-eslint/${rule}` in extensions.rules
            )
          );
        },
      },
    ),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
}
