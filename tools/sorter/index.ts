import { globIterate as glob } from 'glob';
import { readFile, writeFile } from 'node:fs/promises';
import * as prettier from 'prettier';
import { createTransformer } from 'tsc-template';
import ts, { type ObjectLiteralExpression } from 'typescript';

const root = new URL('../../', import.meta.url);
const srcDir = new URL('src/', root);

const rulesDir = new URL('rules/', srcDir);

const comparator = new Intl.Collator('en-US', { sensitivity: 'base' });
const printer = ts.createPrinter();
const prettierOptions = { ...(await prettier.resolveConfig(new URL('.prettierrc.json', root))), parser: 'typescript' };

function sortRules(obj: ObjectLiteralExpression) {
  const props = Array.from(obj.properties);

  props.sort((a, b) => {
    if (!ts.isPropertyAssignment(a) || (!ts.isIdentifier(a.name) && !ts.isStringLiteral(a.name))) {
      return 1;
    } else if (!ts.isPropertyAssignment(b) || (!ts.isIdentifier(b.name) && !ts.isStringLiteral(b.name))) {
      return -1;
    }

    return comparator.compare(a.name.text, b.name.text);
  });

  return ts.factory.createObjectLiteralExpression(props, true);
}

for await (const file of glob('**/*.{ts,tsx}', { cwd: rulesDir })) {
  const url = new URL(file, rulesDir);
  const contents = await readFile(url, 'utf8');
  let sourceFile = ts.createSourceFile(
    file,
    contents,
    { languageVersion: ts.ScriptTarget.ESNext },
    false,
    ts.ScriptKind.TS,
  );

  sourceFile = ts.transform(sourceFile, [
    createTransformer((node) =>
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer) &&
      node.name.text === 'rules'
        ? ts.factory.updateVariableDeclaration(
            node,
            node.name,
            node.exclamationToken,
            node.type,
            sortRules(node.initializer),
          )
        : node,
    ),
  ]).transformed[0]!;

  const printed = await prettier.format(printer.printFile(sourceFile), prettierOptions);

  await writeFile(url, printed, 'utf8');
  console.log(`Sorted rules in ${file}`);
}
