import type { Browser } from 'puppeteer';
import existingRules from '../../src/rules/imports.js';
import { checkRules, createHeader, init } from './utils.mjs';

const url = 'https://github.com/import-js/eslint-plugin-import';

const importPluginPrefixPattern = /import\//u;

export default async function checkImports(browser: Browser) {
  const page = await init(browser, url);

  const header = createHeader('eslint-import-plugin', url);

  const modernRules = await page.evaluate(() =>
    Array.from(
      window.q('#readme').querySelectorAll('table tr td:first-child'),
      ({ textContent }) => textContent,
    ).filterEmptyItems(),
  );

  const result = checkRules('Rules', {
    modernRules,
    existingRules: Object.fromEntries(
      Object.entries(existingRules.rules).map(([name, rule]) => [name.replace(importPluginPrefixPattern, ''), rule]),
    ),
  });

  return `${header}\n\n${result}`;
}
