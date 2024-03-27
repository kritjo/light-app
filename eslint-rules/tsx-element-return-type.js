module.exports = {
  create(context) {
    if (!context.filename.endsWith(".tsx")) {
      return {};
    }
    return {
      ExportDefaultDeclaration(node) {
        if (
          node.declaration?.returnType?.typeAnnotation.typeName.name !==
          "ReactElement"
        ) {
          context.report({
            node,
            message: "Element must return a ReactElement",
          });
        }
      },
    };
  },
};
