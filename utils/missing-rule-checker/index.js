const puppeteer = require('puppeteer');
const checkEslint = require('./eslint');
const checkTypescript = require('./typescript');

(async () => {
  try {
    const browser = await puppeteer.launch();

    const results = await Promise.all([checkEslint(browser), checkTypescript(browser)]);

    results.forEach((result) => console.log(result));

    await browser.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
