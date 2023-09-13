import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import ts, { type Node, type ObjectLiteralExpression, type PropertyAssignment } from 'typescript';
import fromAsync from './fromAsync.mjs';
import fsWalk from './fsWalk.mjs';
import { transform } from './utils.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '../../src');

const rulesDir = resolve(root, 'rules');

const comparator = new Intl.Collator('en-US', { sensitivity: 'base' });
const printer = ts.createPrinter();

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

await fromAsync(fsWalk(rulesDir), async ([file]) => {
  const path = resolve(rulesDir, file);
  const contents = await readFile(path, 'utf8');
  let sourceFile = ts.createSourceFile(
    file,
    contents,
    { languageVersion: ts.ScriptTarget.ESNext, impliedNodeFormat: ts.ModuleKind.CommonJS },
    false,
    ts.ScriptKind.TS,
  );

  sourceFile = ts.transform(sourceFile, [
    transform((node) => {
      if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name) && node.name.text === 'rules') {
        return sortRules(node);
      } else {
        return node;
      }
    }),
  ]).transformed[0];

  const printed = printer.printFile(sourceFile);

  await writeFile(path, printed, 'utf8');
});
