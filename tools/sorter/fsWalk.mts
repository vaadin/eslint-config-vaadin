import type { Dirent } from 'fs';
import { opendir } from 'node:fs/promises';

export type FsWalkResult = readonly [path: URL, entry: Dirent];

export default async function* fsWalk(dir: URL): AsyncGenerator<FsWalkResult, void> {
  const subDirs = [];

  for await (const entry of await opendir(dir)) {
    if (entry.isDirectory()) {
      subDirs.push(entry);
    } else if (entry.isFile()) {
      yield [new URL(entry.name, dir), entry];
    }
  }

  for (const subdir of subDirs) {
    yield* fsWalk(new URL(`${subdir.name}/`, dir));
  }
}
