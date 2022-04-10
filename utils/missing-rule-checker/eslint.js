// const bestPractices = require('../../rules/best-practices');
// const es6 = require('../../rules/es6');
// const possibleErrors = require('../../rules/possible-errors');
// const strict = require('../../rules/strict');
// const stylisticIssues = require('../../rules/stylistic-issues');
// const variables = require('../../rules/variables');

const layoutFormatting = require('../../rules/layout-formatting');
const possibleProblems = require('../../rules/possible-problems');
const suggestions = require('../../rules/suggestions');
const { checkRules, init, createHeader, zip } = require('./utils');

const url = 'https://eslint.org/docs/rules';

const ruleListNames = ['layout-formatting', 'possible-problems', 'suggestions'];

const deprecatedRuleNameList = ['deprecated', 'removed'];

module.exports = async (browser) => {
  const page = await init(browser, url);

  const header = createHeader('eslint', url);

  const [layoutFormattingLoadedSet, possibleProblemsLoadedSet, suggestionsLoadedSet] = await page.evaluate(
    (ruleListNames) =>
      ruleListNames.map((id) => {
        return Array.from(
          window.q(`#${id} ~ table`).querySelectorAll('td:nth-child(4)'),
          ({ textContent }) => textContent,
        );
      }),
    ruleListNames,
  );

  const [deprecatedLoadedSet, removedLoadedSet] = await page.evaluate(
    (deprecatedRuleNameList) =>
      deprecatedRuleNameList.map((id) => {
        const table = window.q(`#${id} ~ .rule-list`);

        return [
          Array.from(table.querySelectorAll('tr > td:first-child'), ({ textContent }) => textContent),
          Array.from(table.querySelectorAll('tr > td:last-child'), ({ textContent }) => textContent),
        ];
      }),
    deprecatedRuleNameList,
  );

  const commonDeprecations = [...zip(...deprecatedLoadedSet), ...zip(...removedLoadedSet)];

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
};
