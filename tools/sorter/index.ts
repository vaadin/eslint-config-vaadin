import { glob, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import * as prettier from 'prettier';
import { createTransformer } from 'tsc-template';
import {
  createPrinter,
  createSourceFile,
  factory,
  isIdentifier,
  isObjectLiteralExpression,
  isPropertyAssignment,
  isStringLiteral,
  isVariableDeclaration,
  type ObjectLiteralExpression,
  ScriptKind,
  ScriptTarget,
  transform,
} from 'typescript';

const root = new URL('../../', import.meta.url);
const srcDir = new URL('src/', root);

const rulesDir = new URL('rules/', srcDir);

const comparator = new Intl.Collator('en-US', { sensitivity: 'base' });
const printer = createPrinter();
const prettierOptions = { ...(await prettier.resolveConfig(new URL('.prettierrc.json', root))), parser: 'typescript' };

function sortRules(rulesNode: ObjectLiteralExpression): ObjectLiteralExpression {
  const props = Array.from(rulesNode.properties);

  props.sort((a, b) => {
    if (!isPropertyAssignment(a) || (!isIdentifier(a.name) && !isStringLiteral(a.name))) {
      return 1;
    } else if (!isPropertyAssignment(b) || (!isIdentifier(b.name) && !isStringLiteral(b.name))) {
      return -1;
    }

    return comparator.compare(a.name.text, b.name.text);
  });

  return factory.createObjectLiteralExpression(props, true);
}

const rulesPropertyNames = ['rules', 'common', 'specific'];

for await (const file of glob('**/*.ts', { cwd: fileURLToPath(rulesDir) })) {
  const url = new URL(file, rulesDir);
  const contents = await readFile(url, 'utf8');
  const sourceFile = transform(
    createSourceFile(file, contents, { languageVersion: ScriptTarget.ESNext }, false, ScriptKind.TS),
    [
      createTransformer((node) => {
        if (
          isVariableDeclaration(node) &&
          isIdentifier(node.name) &&
          rulesPropertyNames.includes(node.name.text) &&
          node.initializer &&
          isObjectLiteralExpression(node.initializer)
        ) {
          return factory.updateVariableDeclaration(
            node,
            node.name,
            node.exclamationToken,
            node.type,
            sortRules(node.initializer),
          );
        } else {
          return node;
        }
      }),
    ],
  ).transformed[0]!;

  const printed = await prettier.format(printer.printFile(sourceFile), prettierOptions);

  await writeFile(url, printed, 'utf8');
}
