import type { Browser } from 'puppeteer-core';
import existingRules from '../../src/rules/imports.js';
import { checkRules, createHeader, init } from './utils.js';

const url = 'https://github.com/un-ts/eslint-plugin-import-x/blob/master/README.md';

const importPluginPrefixPattern = /import-x\//u;

export default async function checkImports(browser: Browser): Promise<string> {
  const page = await init(browser, url);

  const header = createHeader('eslint-import-plugin-x', url);

  const modernRules = await page
    .locator(() => document.querySelectorAll('table tr td:first-child'))
    .map((rules) => Array.from(rules, ({ textContent }) => textContent!))
    .wait();

  const result = checkRules('Rules', {
    modernRules,
    existingRules: Object.keys(existingRules).map((name) => name.replace(importPluginPrefixPattern, '')),
  });

  return `${header}\n\n${result}`;
}
