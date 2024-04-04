module.exports = {
  meta: {
    messages: {
      missingImport: "The file must include \"import 'server-only';\"",
    },
  },
  create(context) {
    return {
      Program(node) {
        const sourceCode = context.sourceCode.getText();

        if (!sourceCode.match(/^import ['"]server-only['"];.*/u)) {
          context.report({
            node,
            messageId: "missingImport",
          });
        }
      },
    };
  },
};
