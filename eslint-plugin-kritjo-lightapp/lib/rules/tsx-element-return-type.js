module.exports = {
  meta: {
    messages: {
      elementMustReturnReactElement: "Element must return a ReactElement",
    },
  },
  create(context) {
    if (!context.filename.endsWith(".tsx")) {
      return {};
    }
    return {
      ExportDefaultDeclaration(node) {
        if (
          node?.declaration?.returnType?.typeAnnotation?.typeName.name !==
          "ReactElement"
        ) {
          context.report({
            node,
            messageId: "elementMustReturnReactElement",
          });
        }
      },
    };
  },
};
