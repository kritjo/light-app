module.exports = {
  create(context) {
    return {
      Program(node) {
        const sourceCode = context.sourceCode.getText();

        if (!sourceCode.match(/^import ['"]server-only['"];.*/u)) {
          context.report({
            node,
            message: `The file must include "import 'server-only';`,
          });
        }
      },
    };
  },
};
