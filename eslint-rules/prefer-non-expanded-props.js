module.exports = {
  create(context) {
    if (!context.filename.endsWith(".tsx")) {
      return {};
    }
    return {
      ExportDefaultDeclaration(node) {
        if (node.declaration.params
            .filter(param => param.type !== "Identifier").length > 0
          || !node.declaration.params
            .every(param => param.name === "props")) {
          context.report({
            node,
            message: "Prefer a single 'props' parameter instead of expanded props"
          });
        }
      }
    };
  }
};