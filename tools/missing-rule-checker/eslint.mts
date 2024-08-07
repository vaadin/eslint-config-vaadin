import type { Browser } from 'puppeteer-core';
import possibleProblems from '../../src/rules/eslint/possible-problems.js';
import suggestions from '../../src/rules/eslint/suggestions.js';
import { checkRules, createHeader, init } from './utils.mjs';

const url = 'https://eslint.org/docs/latest/rules/';

const ruleListNames = ['possible-problems', 'suggestions', 'deprecated', 'removed'];

export default async function checkEslint(browser: Browser) {
  const page = await init(browser, url);

  const header = createHeader('eslint', url);

  const [possibleProblemsLoadedSet, suggestionsLoadedSet, deprecated, removed] = await Promise.all(
    ruleListNames.map(async (name, index, arr) => {
      const elements = await page.$$(
        `#${name} ~ .rule${index + 1 < arr.length ? `:has(~ #${arr[index + 1]})` : ''} .rule__name`,
      );
      const names = await Promise.all(
        elements.map((rule) => rule.evaluate((el) => el.firstChild?.textContent?.trim())),
      );

      return names.filter((rule) => rule != null);
    }),
  );

  const commonDeprecations = [...deprecated!, ...removed!];

  const results = [
    checkRules(
      'Possible Problems',
      {
        modernRules: possibleProblemsLoadedSet!,
        existingRules: Object.keys(possibleProblems.rules),
        deprecatedRules: commonDeprecations,
      },
      {
        filterDeprecatedRules(rule) {
          return possibleProblems.rules[rule as keyof typeof possibleProblems.rules] !== 'off';
        },
      },
    ),
    checkRules(
      'Suggestions',
      {
        modernRules: suggestionsLoadedSet!,
        existingRules: Object.keys(suggestions.rules),
        deprecatedRules: commonDeprecations,
      },
      {
        filterDeprecatedRules(rule) {
          return suggestions.rules[rule as keyof typeof suggestions.rules] !== 'off';
        },
      },
    ),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
}
