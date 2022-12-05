import type { Dirent } from 'fs';
import { opendir } from 'node:fs/promises';
import { join } from 'node:path';

export type FsWalkResult = readonly [path: string, entry: Dirent];

export default async function* fsWalk(dir: string): AsyncGenerator<FsWalkResult, void> {
  const subDirs = [];

  for await (const entry of await opendir(dir)) {
    if (entry.isDirectory()) {
      subDirs.push(entry);
    } else if (entry.isFile()) {
      yield [join(dir, entry.name), entry];
    }
  }

  for (const subdir of subDirs) {
    yield* fsWalk(join(dir, subdir.name));
  }
}
