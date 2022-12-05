import type { Browser } from 'puppeteer';

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

  interface Array<T> {
    filterEmptyItems(): T extends (undefined | null) ? never : Array<T>;
  }
}

export type Rules<R extends Record<string, unknown>> = Readonly<{
  modernRules: readonly string[];
  existingRules: R;
  deprecatedRules?: readonly string[];
}>;

export type Filters<R extends Record<string, unknown>> = Readonly<{
  filterMissingRules?: (value: keyof R, index: number, array: string[]) => boolean;
  filterWrongSetRules?: (value: keyof R, index: number, array: string[]) => boolean;
  filterDeprecatedRules?: (value: keyof R, index: number, array: string[]) => boolean;
}>;

export function checkRules<R extends Record<string, unknown>>(
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
    if (!(rule in existingRules)) {
      currentMissingRules.push(rule);
    }
  }

  for (const rule in existingRules) {
    if (!modernRules.includes(rule)) {
      currentWrongSetRules.push(rule);
    }
  }

  for (const ruleAndReplacement of deprecatedRules) {
    const [rule] = ruleAndReplacement;

    if (rule in existingRules) {
      currentDeprecatedRules.push(ruleAndReplacement);
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
      ? `DEPRECATED RULES:\n${currentDeprecatedRules
          .map(([rule, replacement]) => `\t${rule} || REPLACEMENT: ${replacement}`)
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
      case 'warning':
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

    Array.prototype.filterEmptyItems = function() {
      return this.filter(Boolean);
    }
  });

  return page;
}

export const createHeader = (title: string, url: string) =>
  `=======================\n| ${title.toUpperCase()}\n=======================\n\nURL: ${url}`;
