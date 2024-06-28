import type { Browser } from 'puppeteer-core';
import layoutFormatting from '../../src/rules/eslint/layout-formatting.js';
import possibleProblems from '../../src/rules/eslint/possible-problems.js';
import suggestions from '../../src/rules/eslint/suggestions.js';
import { checkRules, createHeader, init } from './utils.mjs';

const url = 'https://eslint.org/docs/latest/rules/';

const ruleListNames = ['possible-problems', 'suggestions', 'layout--formatting', 'deprecated', 'removed'];

export default async function checkEslint(browser: Browser) {
  const page = await init(browser, url);

  const header = createHeader('eslint', url);

  const [layoutFormattingLoadedSet, possibleProblemsLoadedSet, suggestionsLoadedSet, deprecated, removed] =
    await Promise.all(
      ruleListNames.map((name, index, arr) =>
        page
          .locator(() =>
            document.querySelectorAll(`#${name} ~ .rule${index + 1 < arr.length ? `:has(~ #${arr[index + 1]})` : ''} .rule__name`),
          )
          .map((rules) =>
            Array.from(rules, ({ textContent }) => textContent).filter(
              (el) => el != null,
            ),
          )
          .wait(),
      ),
    );

  const commonDeprecations = [...deprecated, ...removed];

  const results = [
    checkRules('Layout & Formatting', {
      modernRules: layoutFormattingLoadedSet,
      existingRules: Object.keys(layoutFormatting.rules),
      deprecatedRules: commonDeprecations,
    }),
    checkRules('Possible Problems', {
      modernRules: possibleProblemsLoadedSet,
      existingRules: Object.keys(possibleProblems.rules),
      deprecatedRules: commonDeprecations,
    }),
    checkRules('Suggestions', {
      modernRules: suggestionsLoadedSet,
      existingRules: Object.keys(suggestions.rules),
      deprecatedRules: commonDeprecations,
    }),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
}
