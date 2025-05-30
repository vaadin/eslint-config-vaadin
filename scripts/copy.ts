import { copyFile, glob } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const src = new URL('src/', root);

for await (const file of glob('**/*.json', { cwd: fileURLToPath(src) })) {
  await copyFile(new URL(file, src), new URL(file, root));
}
