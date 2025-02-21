import type { Linter } from 'eslint';
import type { Browser } from 'puppeteer-core';
import _extensionsTC from '../../src/rules/typescript-requiring-type-checking/extensions.js';
import _originalTC from '../../src/rules/typescript-requiring-type-checking/original.js';
import * as _extensions from '../../src/rules/typescript/extensions.js';
import * as _original from '../../src/rules/typescript/original.js';
import { checkRules, createHeader, init } from './utils.js';

const url = 'https://typescript-eslint.io/rules';
const extensions = { ..._extensions.common, ..._extensions.specific, ..._extensionsTC } satisfies Linter.RulesRecord;
const original = { ..._original.common, ..._original.specific, ..._originalTC } satisfies Linter.RulesRecord;

const existingRules = {
  ...original,
  ...extensions,
} satisfies Linter.RulesRecord;

export default async function checkTypeScript(browser: Browser): Promise<string> {
  const page = await init(browser, url);

  const header = createHeader('@typescript-eslint', url);
  const rows = page.locator(() => document.querySelectorAll('table tr')).map((r) => Array.from(r));
  const [modernRules, deprecatedRules] = await Promise.all([
    rows
      .map((_rows) =>
        _rows
          .filter((row) => row.querySelector('td[title=deprecated]') === null)
          .map((row) => row.querySelector('td:first-child code')?.textContent)
          .filter((rule) => rule != null),
      )
      .wait(),
    rows
      .map((_rows) =>
        _rows
          .filter((row) => row.querySelector('td[title=deprecated]') !== null)
          .map((row) => row.querySelector('td:first-child code')?.textContent)
          .filter((rule) => rule != null),
      )
      .wait(),
  ]);

  const results = [
    checkRules(
      'Rules',
      {
        modernRules,
        existingRules: Object.keys(existingRules),
        deprecatedRules,
      },
      {
        filterWrongSetRules(rule) {
          return existingRules[rule as keyof typeof existingRules] !== 'off';
        },
      },
    ),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
}
