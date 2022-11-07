export = function resolve(relativePath: string): string {
  return require.resolve(relativePath);
}
