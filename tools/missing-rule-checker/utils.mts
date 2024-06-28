import type { Browser } from 'puppeteer-core';

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

export type Rules<R extends string> = Readonly<{
  modernRules: readonly string[];
  existingRules: readonly R[];
  deprecatedRules?: readonly string[];
}>;

export type Filters<R extends string> = Readonly<{
  filterMissingRules?: (value: R, index: number, array: string[]) => boolean;
  filterWrongSetRules?: (value: R, index: number, array: string[]) => boolean;
  filterDeprecatedRules?: (value: R, index: number, array: string[]) => boolean;
}>;

export function checkRules<R extends string>(
  setName: string,
  { modernRules, existingRules, deprecatedRules = [] }: Rules<R>,
  {
    filterMissingRules = () => true,
    filterWrongSetRules = () => true,
    filterDeprecatedRules = () => true,
  }: Filters<R> = {},
) {
  let currentMissingRules = [];
  let currentWrongSetRules = [];
  let currentDeprecatedRules = [];

  const header = `SET: ${setName}\n`;

  for (const rule of modernRules) {
    // @ts-expect-error: too generic
    if (!(existingRules.includes(rule))) {
      currentMissingRules.push(rule);
    }
  }

  for (const rule of existingRules) {
    if (!modernRules.includes(rule) && !deprecatedRules.includes(rule)) {
      currentWrongSetRules.push(rule);
    }
  }

  for (const ruleAndReplacement of deprecatedRules) {
    const [rule] = ruleAndReplacement;

    if (rule in existingRules) {
      currentDeprecatedRules.push(ruleAndReplacement);
    }
  }
  // @ts-expect-error: too generic
  currentMissingRules = currentMissingRules.filter(filterMissingRules);
  currentWrongSetRules = currentWrongSetRules.filter(filterWrongSetRules);
  // @ts-expect-error: too generic
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
      ? `DEPRECATED RULES:\n${currentDeprecatedRules
          .map((rule) => `\t${rule}`)
          .join('\n')}\n`
      : '';

    return `${header}${missingRulesMessage}${wrongSetRulesMessage}${deprecationMessage}`;
  }

  return `${header}EVERYTHING OK`;
}

export async function init(browser: Browser, url: string) {
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
