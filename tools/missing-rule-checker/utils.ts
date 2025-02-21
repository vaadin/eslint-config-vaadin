import type { Browser, Page } from 'puppeteer-core';

declare global {
  interface Window {
    q<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K];
    q<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K];
    q<E extends Element = Element>(selectors: string): E;
  }

  interface Element {
    findNextSibling(selector: string): Element | null;
    findNextSiblings(selector: string, finishSelector?: string): Generator<Element, void>;
  }
}

export type Rules = Readonly<{
  modernRules: readonly string[];
  existingRules: readonly string[];
  deprecatedRules?: readonly string[];
}>;

export type Filters = Readonly<{
  filterMissingRules?: (value: string, index: number, array: string[]) => boolean;
  filterWrongSetRules?: (value: string, index: number, array: string[]) => boolean;
  filterDeprecatedRules?: (value: string, index: number, array: string[]) => boolean;
}>;

export function checkRules(
  setName: string,
  { modernRules, existingRules, deprecatedRules = [] }: Rules,
  {
    filterMissingRules = () => true,
    filterWrongSetRules = () => true,
    filterDeprecatedRules = () => true,
  }: Filters = {},
): string {
  let currentMissingRules = [];
  let currentWrongSetRules = [];
  let currentDeprecatedRules = [];

  const header = `SET: ${setName}\n`;

  for (const rule of modernRules) {
    if (!existingRules.includes(rule)) {
      currentMissingRules.push(rule);
    }
  }

  for (const rule of existingRules) {
    if (!modernRules.includes(rule) && !deprecatedRules.includes(rule)) {
      currentWrongSetRules.push(rule);
    }
  }

  for (const rule of deprecatedRules) {
    if (existingRules.includes(rule)) {
      currentDeprecatedRules.push(rule);
    }
  }
  currentMissingRules = currentMissingRules.filter(filterMissingRules);
  currentWrongSetRules = currentWrongSetRules.filter(filterWrongSetRules);
  currentDeprecatedRules = currentDeprecatedRules.filter(filterDeprecatedRules);

  const hasMissingRules = currentMissingRules.length > 0;
  const hasWrongSetRules = currentWrongSetRules.length > 0;
  const hasDeprecatedRules = currentDeprecatedRules.length > 0;

  if (hasMissingRules || hasWrongSetRules || hasDeprecatedRules) {
    const missingRulesMessage = hasMissingRules
      ? `MISSING RULES:\n${currentMissingRules.map((name) => `\t${name}`).join('\n')}\n`
      : '';

    const wrongSetRulesMessage = hasWrongSetRules
      ? `RULES FROM THE WRONG SET:\n${currentWrongSetRules.map((name) => `\t${name}`).join('\n')}\n`
      : '';

    const deprecationMessage = hasDeprecatedRules
      ? `DEPRECATED RULES:\n${currentDeprecatedRules.map((rule) => `\t${rule}`).join('\n')}\n`
      : '';

    return `${header}${missingRulesMessage}${wrongSetRulesMessage}${deprecationMessage}`;
  }

  return `${header}EVERYTHING OK`;
}

export async function init(browser: Browser, url: string): Promise<Page> {
  const page = await browser.newPage();

  page.on('console', (msg) => {
    let cb;
    let type;

    switch (msg.type()) {
      case 'error':
        cb = console.error;
        type = 'ERROR';
        break;
      case 'warn':
        cb = console.warn;
        type = 'WARNING';
        break;
      default:
        cb = console.log;
        type = 'LOG';
        break;
    }

    cb.call(console, `[${url}:${type}]`, msg.text());
  });

  await page.goto(url);
  await page.evaluate(() => {
    window.q = (selector: string) => {
      const element = document.querySelector(selector);

      if (!element) {
        throw new Error(`Element "${selector}" is not found on page`);
      }

      return element;
    };

    Element.prototype.findNextSibling = function (selector) {
      const { value = null } = this.findNextSiblings(selector).next();
      return value;
    };

    Element.prototype.findNextSiblings = function* (selector, finishSelector) {
      let sibling = this.nextElementSibling;

      while (sibling !== null && (finishSelector ? !sibling.matches(finishSelector) : true)) {
        if (sibling.matches(selector)) {
          yield sibling;
        }

        sibling = sibling.nextElementSibling;
      }
    };
  });

  return page;
}

export const createHeader = (title: string, url: string) =>
  `=======================\n| ${title.toUpperCase()}\n=======================\n\nURL: ${url}`;
