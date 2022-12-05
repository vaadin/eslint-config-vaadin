import ts, { type Node, type TransformationContext, type TransformerFactory } from 'typescript';

export function transform<T extends Node>(transformer: (node: Node) => Node | undefined): TransformerFactory<T> {
  return (context: TransformationContext) => (root: T) => {
    const visitor = (node: Node): Node | undefined => ts.visitEachChild(transformer(node), visitor, context);
    return ts.visitNode(root, visitor);
  };
}
