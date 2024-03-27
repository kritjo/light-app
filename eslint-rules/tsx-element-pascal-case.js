module.exports = {
  create(context) {
    if (!context.filename.endsWith(".tsx")) {
      return {};
    }

    return {
      ExportDefaultDeclaration(node) {
        if (/^[a-z]/u.test(node.declaration.id.name.charAt(0))) {
          context.report({
            node,
            message: `Element name must start with a capital letter`
          });
        }
      }
    };
  }
};