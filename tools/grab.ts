import { constants, open } from 'node:fs/promises';
import { basename, extname } from 'node:path/posix';
import { stdout } from 'node:process';
import { parseArgs } from 'node:util';
import puppeteer from 'puppeteer-core';

const {
  positionals: [url],
  values: { help, outFile },
} = parseArgs({
  allowPositionals: true,
  options: {
    outFile: {
      short: 'o',
      type: 'string',
    },
    help: {
      short: 'h',
      type: 'boolean',
    },
  },
});

if (help) {
  console.log(`USAGE:
npm run grab [options] <Github URL>

Parses long list of the ESLint rules defined at Github
and creates an object with them along with their URLs
and descriptions.

ARGS:
  URL                  - An Github URL to grab

OPTIONS:
  --help, -h           - Shows this message
  --outFile, -o <path> - Writes output to a specified file.
`);

  process.exit(0);
}

if (!url) {
  throw new Error('You have to specify an URL to grab');
}

const browser = await puppeteer.launch({ headless: true, executablePath: process.env['CHROME_BIN'] });

const page = await browser.newPage();

await page.goto(url);

const result = await page.evaluate(() =>
  Array.from(
    document.querySelectorAll('.react-directory-row-name-cell-large-screen .react-directory-filename-column a'),
    (el) => (el as HTMLAnchorElement).href,
  ),
);

let writer: NodeJS.WritableStream = stdout;
let finalizer = () => {};

if (outFile) {
  const root = new URL('../', import.meta.url);

  const file = await open(new URL(outFile, root), constants.O_WRONLY | constants.O_TRUNC | constants.O_CREAT);
  writer = file.createWriteStream();
  finalizer = () => file.close();
}

writer.write(`import type { Linter } from 'eslint';
const rules: Linter.RulesRecord = {
`);

for await (const url of result) {
  const page = await browser.newPage();
  await page.goto(url);
  console.log(`Processing ${url}`);
  const name = await page.evaluate(
    async () => document.querySelector('article .heading-element')?.textContent ?? '%NOTHING%',
  );
  writer.write(`// ${name}
// ${url}
'${basename(url, extname(url))}': 'error',
`);
}

writer.write(`\n};`);

writer.end();
finalizer();
await browser.close();
