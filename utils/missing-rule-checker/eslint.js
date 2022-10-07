const layoutFormatting = require('../../rules/eslint/layout-formatting');
const possibleProblems = require('../../rules/eslint/possible-problems');
const suggestions = require('../../rules/eslint/suggestions');
const { checkRules, init, createHeader } = require('./utils');

const url = 'https://eslint.org/docs/latest/rules/';

const ruleListNames = ['layout--formatting', 'possible-problems', 'suggestions'];

const deprecatedRuleNameList = ['deprecated', 'removed'];

module.exports = async (browser) => {
  const page = await init(browser, url);

  const header = createHeader('eslint', url);

  const [layoutFormattingLoadedSet, possibleProblemsLoadedSet, suggestionsLoadedSet] = await page.evaluate(
    (ruleListNames) =>
      ruleListNames.map((id) =>
        Array.from(
          window.q(`#${id}`).findNextSiblings('.rule', 'h2'),
          (el) => el.querySelector('.rule__content > a').textContent,
        ),
      ),
    ruleListNames,
  );

  const [deprecatedLoadedSet, removedLoadedSet] = await page.evaluate(
    (deprecatedRuleNameList) =>
      deprecatedRuleNameList.map((id) =>
        Array.from(
          window.q(`#${id}`).findNextSiblings('.rule--deprecated', 'h2'),
          (el) => el.querySelector('.rule__content > .rule__name').childNodes[0].textContent,
        ),
      ),
    deprecatedRuleNameList,
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
};
