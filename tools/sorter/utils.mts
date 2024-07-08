import ts, { type Node, type TransformationContext, type TransformerFactory, type VisitResult } from 'typescript';

export function transform<T extends Node>(
  transformer: (node: Node) => VisitResult<Node | undefined>,
): TransformerFactory<T> {
  return (context: TransformationContext) => (root: T) => {
    const visitor = (node: Node): VisitResult<Node | undefined> => {
      const transformed = transformer(node);

      if (transformed !== node) {
        return transformed;
      }

      return ts.visitEachChild(transformed, visitor, context);
    };
    return ts.visitEachChild(root, visitor, context);
  };
}
