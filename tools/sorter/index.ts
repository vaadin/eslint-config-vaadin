import { glob, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { basename } from 'node:path';
import { createTransformer } from 'tsc-template';
import ts, { type Node, type ObjectLiteralExpression, type PropertyAssignment } from 'typescript';
import * as prettier from 'prettier';

const root = new URL('../../', import.meta.url);
const srcDir = new URL('src/', root);

const rulesDir = new URL('rules/', srcDir);

const comparator = new Intl.Collator('en-US', { sensitivity: 'base' });
const printer = ts.createPrinter();
const prettierOptions = { ...(await prettier.resolveConfig(new URL('.prettierrc.json', root))), parser: 'typescript' };

function sortRules(rulesNode: PropertyAssignment): Node {
  const obj = rulesNode.initializer as ObjectLiteralExpression;
  const props = Array.from(obj.properties);

  props.sort((a, b) => {
    if (!ts.isPropertyAssignment(a) || (!ts.isIdentifier(a.name) && !ts.isStringLiteral(a.name))) {
      return 1;
    } else if (!ts.isPropertyAssignment(b) || (!ts.isIdentifier(b.name) && !ts.isStringLiteral(b.name))) {
      return -1;
    }

    return comparator.compare(a.name.text, b.name.text);
  });

  return ts.factory.createPropertyAssignment(rulesNode.name, ts.factory.createObjectLiteralExpression(props, true));
}

for await (const file of glob('**/*', { cwd: fileURLToPath(rulesDir) })) {
  const url = new URL(file, rulesDir);
  const contents = await readFile(url, 'utf8');
  let sourceFile = ts.createSourceFile(
    basename(fileURLToPath(file)),
    contents,
    { languageVersion: ts.ScriptTarget.ESNext },
    false,
    ts.ScriptKind.TS,
  );

  sourceFile = ts.transform(sourceFile, [
    createTransformer((node) => {
      if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name) && node.name.text === 'rules') {
        return sortRules(node);
      } else {
        return node;
      }
    }),
  ]).transformed[0]!;

  const printed = await prettier.format(printer.printFile(sourceFile), prettierOptions);

  await writeFile(url, printed, 'utf8');
}
