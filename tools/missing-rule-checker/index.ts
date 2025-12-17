import dns from 'node:dns/promises';
import puppeteer, { type Browser } from 'puppeteer-core';
import checkEslint from './eslint.js';
import checkImports from './imports.js';
import checkTypeScript from './typescript.js';

try {
  let browser: Browser;

  if (process.env['CHROME_BIN']) {
    browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env['CHROME_BIN'],
    });
  } else if (process.env['BROWSER_HOST'] && process.env['BROWSER_PORT']) {
    const { address } = await dns.lookup(process.env['BROWSER_HOST']);

    browser = await puppeteer.connect({
      browserURL: `http://${address}:${process.env['BROWSER_PORT']}`,
    });
  } else {
    throw new Error('Neither "CHROME_BIN" nor "BROWSER_URL" environment variable is set');
  }

  const results = await Promise.all([checkEslint(browser), checkTypeScript(browser), checkImports(browser)]);

  results.forEach((result) => console.log(result));

  await browser.close();
} catch (e) {
  console.error(e);
  process.exit(1);
}
