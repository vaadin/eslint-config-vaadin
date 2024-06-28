import puppeteer from 'puppeteer-core';
import checkEslint from './eslint.mjs';
import checkImports from './imports.mjs';
import checkTypeScript from './typescript.mjs';

if (!process.env['CHROME_BIN']) {
  throw new Error('"CHROME_BIN" environment variable is not set');
}

try {
  const browser = await puppeteer.launch({ headless: true, executablePath: process.env['CHROME_BIN'] });

  const results = await Promise.all([
    checkEslint(browser),
    checkTypeScript(browser),
    checkImports(browser)
  ]);

  results.forEach((result) => console.log(result));

  await browser.close();
} catch (e) {
  console.error(e);
  process.exit(1);
}
