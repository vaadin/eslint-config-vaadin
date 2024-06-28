import type { Browser } from 'puppeteer-core';
import existingRules from '../../src/rules/imports.js';
import { checkRules, createHeader, init } from './utils.mjs';

const url = 'https://github.com/import-js/eslint-plugin-import/blob/main/README.md';

const importPluginPrefixPattern = /import\//u;

export default async function checkImports(browser: Browser) {
  const page = await init(browser, url);

  const header = createHeader('eslint-import-plugin', url);

  const modernRules = await page
    .locator(() => document.querySelectorAll('table tr td:first-child'))
    .map((rules) => Array.from(rules, ({ textContent }) => textContent!))
    .wait();

  const result = checkRules('Rules', {
    modernRules,
    existingRules: Object.keys(existingRules.rules).map((name) => name.replace(importPluginPrefixPattern, '')),
  });

  return `${header}\n\n${result}`;
}
