import puppeteer from 'puppeteer';
import checkEslint from './eslint.mjs';
import checkImports from './imports.mjs';
import checkTypeScript from './typescript.mjs';

try {
  const browser = await puppeteer.launch();

  const results = await Promise.all([checkEslint(browser), checkTypeScript(browser), checkImports(browser)]);

  results.forEach((result) => console.log(result));

  await browser.close();
} catch (e) {
  console.error(e);
  process.exit(1);
}
