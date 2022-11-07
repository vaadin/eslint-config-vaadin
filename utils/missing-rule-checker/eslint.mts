import type { Browser } from 'puppeteer';
import layoutFormatting from '../../src/rules/eslint/layout-formatting.js';
import possibleProblems from '../../src/rules/eslint/possible-problems.js';
import suggestions from '../../src/rules/eslint/suggestions.js';
import { checkRules, init, createHeader, filterEmptyItems } from './utils.mjs';

const url = 'https://eslint.org/docs/latest/rules/';

const ruleListNames = ['layout--formatting', 'possible-problems', 'suggestions'];

const deprecatedRuleNameList = ['deprecated', 'removed'];

export default async function checkEslint(browser: Browser) {
  const page = await init(browser, url);

  const header = createHeader('eslint', url);

  const [layoutFormattingLoadedSet, possibleProblemsLoadedSet, suggestionsLoadedSet] = await page.evaluate(
    (ruleListNames, filterEmptyItems) =>
      ruleListNames.map((id) =>
        filterEmptyItems(
          Array.from(
            window.q(`#${id}`).findNextSiblings('.rule', 'h2'),
            (el) => el.querySelector('.rule__content > a')?.textContent,
          ),
        ),
      ),
    ruleListNames,
    filterEmptyItems,
  );

  const [deprecatedLoadedSet, removedLoadedSet] = await page.evaluate(
    (deprecatedRuleNameList, filterEmptyItems) =>
      deprecatedRuleNameList.map((id) =>
        filterEmptyItems(
          Array.from(
            window.q(`#${id}`).findNextSiblings('.rule--deprecated', 'h2'),
            (el) => el.querySelector('.rule__content > .rule__name')?.childNodes[0].textContent,
          ),
        ),
      ),
    deprecatedRuleNameList,
    filterEmptyItems
  );

  const commonDeprecations = [...deprecatedLoadedSet, ...removedLoadedSet];

  const results = [
    checkRules('Layout & Formatting', {
      modernRules: layoutFormattingLoadedSet,
      existingRules: layoutFormatting.rules,
      deprecatedRules: commonDeprecations,
    }),
    checkRules('Possible Problems', {
      modernRules: possibleProblemsLoadedSet,
      existingRules: possibleProblems.rules,
      deprecatedRules: commonDeprecations,
    }),
    checkRules('Suggestions', {
      modernRules: suggestionsLoadedSet,
      existingRules: suggestions.rules,
      deprecatedRules: commonDeprecations,
    }),
  ];

  return results.reduce((acc, result) => `${acc}\n\n${result}`, header);
}
