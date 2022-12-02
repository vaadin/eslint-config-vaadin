// It's better than just using `map(require.resolve)` because `map` provides more than one argument for the callback.
export = function resolve(relativePath: string): string {
  return require.resolve(relativePath);
}
