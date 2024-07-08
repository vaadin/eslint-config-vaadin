import type { Browser } from 'puppeteer-core';
import _extensionsTC from '../../src/rules/typescript-requiring-type-checking/extensions.js';
import _originalTC from '../../src/rules/typescript-requiring-type-checking/original.js';
import _extensions from '../../src/rules/typescript/extensions.js';
import _original from '../../src/rules/typescript/original.js';
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

const existingRules: Record<string, unknown> = {
  ...original.rules,
  ...Object.assign({}, ...original.overrides.map(({ rules }) => rules)),
  ...extensions.rules,
  ...Object.assign({}, ...extensions.overrides.map(({ rules }) => rules)),
};

export default async function checkTypeScript(browser: Browser) {
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
          return existingRules[rule] !== 'off';
        },
      },
    ),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
}
