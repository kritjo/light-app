module.exports = {
  meta: {
    type: "suggestion",
    messages: {
      elementNameMustStartWithCapitalLetter: `Element name must start with a capital letter`,
    },
  },
  create(context) {
    if (!context.filename.endsWith(".tsx")) {
      return {};
    }

    return {
      ExportDefaultDeclaration(node) {
        if (/^[a-z]/u.test(node.declaration.id.name.charAt(0))) {
          context.report({
            node,
            messageId: "elementNameMustStartWithCapitalLetter",
          });
        }
      },
    };
  },
};
