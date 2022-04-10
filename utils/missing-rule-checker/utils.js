function checkRules(
  setName,
  { modernRules, existingRules, deprecatedRules = [] },
  { filterMissingRules = () => true, filterWrongSetRules = () => true, filterDeprecatedRules = () => true } = {},
) {
  let currentMissingRules = [];
  let currentWrongSetRules = [];
  let currentDeprecatedRules = [];

  const header = `SET: ${setName};\n`;

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

function zip(arrA, arrB) {
  const zipped = new Array(arrA.length);

  for (let i = 0, len = zipped.length; i < len; i++) {
    zipped[i] = [arrA[i], arrB[i]];
  }

  return zipped;
}

async function init(browser, url) {
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

    cb.apply(console, [`[${url}:${type}]`, msg.text()]);
  });

  await page.goto(url);
  await page.evaluate(() => {
    window.q = (selector) => {
      const element = document.querySelector(selector);

      if (!element) {
        throw new Error(`Element "${selector}" is not found on page`);
      }

      return element;
    };

    Element.prototype.findSibling = function (selector) {
      let sibling = this.nextElementSibling;

      while (sibling) {
        if (sibling.matches(selector)) {
          return sibling;
        }

        sibling = sibling.nextElementSibling;
      }
    };
  });

  return page;
}

const createHeader = (title, url) =>
  `=======================\n| ${title.toUpperCase()}\n=======================\n\nURL: ${url}`;

module.exports = {
  checkRules,
  createHeader,
  init,
  zip,
};
