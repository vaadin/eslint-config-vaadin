const path = require('path');

// `src` if directly imported, `<root>` if built.
const root = path.resolve(__dirname, '..');

export = function resolve(relativePath: string): string {
  return path.resolve(root, relativePath);
}
